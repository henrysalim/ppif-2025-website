import React, { useRef, useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

export default function DetailBox({ selectedBox, activeTab }) {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;

        const handleMouseDown = (e) => {
            setIsDragging(true);
            setStartY(e.pageY - el.offsetTop);
            setScrollTop(el.scrollTop);
            el.style.cursor = 'grabbing';
            el.style.userSelect = 'none';
        };

        const handleMouseMove = (e) => {
            if (!isDragging) return;
            const y = e.pageY - el.offsetTop;
            const walk = y - startY;
            el.scrollTop = scrollTop - walk;
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            el.style.cursor = 'grab';
            el.style.removeProperty('user-select');
        };

        el.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            el.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startY, scrollTop]);

    useEffect(() => {
        if (activeTab !== 'Skill') {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            return;
        }
        if (!chartRef.current) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const skills = selectedBox.skills || [];
        const data = {
            labels: skills.map(s => s.name),
            datasets: [
                {
                    label: 'Skill Level',
                    data: skills.map(s => s.value),
                    backgroundColor: ['#5AE93A', '#23A9F2', '#F2CF23'],
                    borderRadius: 10,
                },
            ],
        };

        chartInstance.current = new Chart(chartRef.current, {
            type: 'bar',
            data,
            options: {
                responsive: true,
                scales: {
                    y: {
                        min: 0,
                        max: 100,
                        ticks: { stepSize: 20 },
                        grid: { color: '#eee' }
                    },
                    x: {
                        grid: { display: false }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: true }
                }
            },
        });

        // Cleanup on unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [selectedBox, activeTab]);

    return (
        <div className="flex-1 flex flex-col items-center justify-center lg:translate-y-1/2 translate-y-18 md:ml-8 ">
            <div
                ref={scrollRef}
                className="lg:w-[620px] lg:h-[460px] w-[340px] h-[300px] bg-[#25272B] border-4 border-gray-500 rounded-3xl shadow-2xl flex flex-col items-center justify-start p-4 relative overflow-y-auto max-h-full custom-scrollbar"
                style={{ fontFamily: 'HongMengTi' }}
            >
                {activeTab === 'Info' && (
                    <>
                        <img
                            key={selectedBox.id}
                            src={selectedBox.img}
                            alt={selectedBox.title}
                            className="w-full h-72 object-cover rounded-2xl mb-4 shadow-xl"
                            loading="lazy"
                        />
                        <div className="lg:text-lg text-[16px] font-bold text-center">{selectedBox.title}</div>
                        <div className="lg:text-sm text-[12px] text-slate-500 text-center mt-1 px-2">{selectedBox.description}</div>
                    </>
                )}
                {activeTab === 'Member' && (
                    <>
                        <div className="text-lg font-bold text-center mb-2">Team Members</div>
                        <div className="flex flex-wrap justify-center gap-4 mt-2">
                            {selectedBox.teamMembers?.map((member, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                        loading="lazy"
                                    />
                                    <span className="text-xs mt-1 text-white">{member.name}</span>
                                </div>
                            ))}
                        </div>
                    </>
                )}
                {activeTab === 'Skill' && (
                    <div className="w-full flex flex-col items-center">
                        <div className="text-lg font-bold text-center mb-2">Skill Overview</div>
                        <canvas ref={chartRef} width={320} height={220} />

                        <ul className="mt-2 text-center w-full">
                            {selectedBox.skills?.map((skill, idx) => (
                                <li key={idx} className="text-sm text-white">{skill.name}: {skill.value}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}