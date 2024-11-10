'use client';
import React, { useEffect, useRef } from 'react';

function SlideshowBackground({props}) {
    const containerRef = useRef(null);

    // Danh sách hình ảnh cho background
    const images = [

        '/imgs/IMG_8049.jpg',
        '/imgs/IMG_8298.jpg',
        '/imgs/5D3_8255.jpg',
        '/imgs/_MG_7043.JPG',
    ];

    useEffect(() => {
        // Chạy hiệu ứng cuộn tự động
        const container = containerRef.current;
        let scrollInterval;

        if (container) {
            scrollInterval = setInterval(() => {
                container.scrollTop += 1; // Cuộn lên một chút mỗi 20ms để tạo cảm giác mượt
                if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
                    container.scrollTop = 0; // Khi đến cuối, quay lại đầu
                }
            }, 10);
        }

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <>
         {/* Dòng chữ đứng yên ở giữa trang */}
         <div className="absolute inset-0 z-10 flex items-center justify-center">
                <h1 class="bg-red-500 text-white text-5xl font-bold ">{props}</h1>
            </div>
        <div
            ref={containerRef}
            className="relative overflow-hidden h-screen w-screen" // Thay đổi thành chiều cao và chiều rộng toàn màn hình
        >
            
            <div className="flex flex-col h-full">
                {images.map((imgSrc, index) => (
                    <img
                        key={index}
                        src={imgSrc}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover" // Đảm bảo ảnh chiếm toàn bộ không gian và cắt nếu cần
                    />
                ))}
            </div>
        </div>
        </>
        
    );
}

export default SlideshowBackground;
