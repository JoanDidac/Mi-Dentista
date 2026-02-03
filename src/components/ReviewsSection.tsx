
import React, { useEffect, useState, useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import logoTrial from "@/assets/logo-trial.png";
import { reviewsData, type Review } from "@/data/reviews-data";

const ReviewsSection = () => {
    // Randomize reviews on mount
    const [shuffledReviews, setShuffledReviews] = useState<Review[]>([]);

    useEffect(() => {
        // Separate reviews by source
        const googleReviews = reviewsData.filter(r => r.source !== 'doctoralia');
        const doctoraliaReviews = reviewsData.filter(r => r.source === 'doctoralia');

        // Shuffle each array independently
        const shuffleArray = (array: Review[]) => {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        };

        const shuffledGoogle = shuffleArray(googleReviews);
        const shuffledDoctoralia = shuffleArray(doctoraliaReviews);

        // Intercalate: Google - Doctoralia - Google - Doctoralia
        const intercalated: Review[] = [];
        const maxLength = Math.max(shuffledGoogle.length, shuffledDoctoralia.length);

        for (let i = 0; i < maxLength; i++) {
            if (i < shuffledGoogle.length) intercalated.push(shuffledGoogle[i]);
            if (i < shuffledDoctoralia.length) intercalated.push(shuffledDoctoralia[i]);
        }

        setShuffledReviews(intercalated);
    }, []);

    const [autoplayOptions] = useState({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true });
    // Show 3 cards per view on desktop, 1 on mobile
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 }, [Autoplay(autoplayOptions)]);

    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Take the first review as featured if available, or a default one
    const featuredReview = useMemo(() => shuffledReviews[0] || reviewsData[0], [shuffledReviews]);
    // Use the rest for the carousel
    const carouselReviews = useMemo(() => shuffledReviews.slice(1), [shuffledReviews]);

    return (
        <section id="testimonios" className="py-20 bg-brand-primary overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-dark/30 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />

            {/* Background Animated Tooth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none z-0">
                <motion.svg
                    viewBox="0 0 64 64"
                    className="w-full h-full text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [-5, 5, -5]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <g fill="none" fillRule="evenodd">
                        {/* Twinkling Stars */}
                        <motion.polygon
                            fill="currentColor"
                            points="17.561 10.341 13.629 11.493 14.78 7.561 13.629 3.629 17.561 4.78 21.493 3.629 20.341 7.561 21.493 11.493"
                            transform="rotate(-45 17.56 7.56)"
                            animate={{ opacity: [1, 0.5, 1], scale: [1, 0.9, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.polygon
                            fill="currentColor"
                            points="17.78 55.67 15.107 56.453 15.89 53.78 15.107 51.107 17.78 51.89 20.453 51.107 19.67 53.78 20.453 56.453"
                            transform="rotate(-45 17.78 53.78)"
                            animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />

                        {/* Tooth Body */}
                        <path
                            fill="currentColor"
                            d="M26.0714286,14 C21.8109462,14 19,18.8928881 19,24.9285714 C19,30.9642548 21.8109462,50 26.0714286,50 C28.5568423,50 28.8391605,34.1920244 32.1785714,34.177711 C36.1608395,34.1920244 35.8003005,50 38.2857143,50 C42.5461966,50 45.3571429,30.9642548 45.3571429,24.9285714 C45.3571429,18.8928881 42.5461966,14 38.2857143,14 C36.25,14 34.2142857,15.9285714 32.1785714,15.9285714 30.1428571,15.9285714 28.1071428,14 26.0714286,14 Z"
                        />

                        <motion.polygon
                            fill="currentColor"
                            points="36.78 23.67 34.107 24.453 34.89 21.78 34.107 19.107 36.78 19.89 39.453 19.107 38.67 21.78 39.453 24.453"
                            transform="rotate(-45 36.78 21.78)"
                            animate={{ opacity: [1, 0.6, 1], scale: [1, 1.2, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />

                        {/* Rings Group */}
                        <g>
                            <motion.path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth="1"
                                d="M17.4701388,29.01117 C9.93126448,29.8980783 4.92849706,31.4581568 4.92849706,33.2346166 C4.92849706,35.9960404 17.0168088,38.2346166 31.9284971,38.2346166 C46.8401853,38.2346166 58.9284971,35.9960404 58.9284971,33.2346166 C58.9284971,31.8411183 55.8501866,30.5807641 50.8841565,29.6740337"
                                transform="rotate(-30 31.928 33.623)"
                                animate={{ strokeDasharray: ["10 10", "15 15", "10 10"] }}
                                transition={{ duration: 8, repeat: Infinity }}
                            />
                            <motion.path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth="1"
                                d="M13.3558551,29.1929448 C8.13881926,30.1045985 4.8826859,31.3969451 4.8826859,32.830127 C4.8826859,35.5915508 16.9709977,37.830127 31.8826859,37.830127 L31.8826859,37.830127 C46.7943741,37.830127 58.8826859,35.5915508 58.8826859,32.830127 C58.8826859,31.0833094 54.0454791,29.5457122 46.7162979,28.6516378"
                                transform="rotate(30 31.883 33.24)"
                                animate={{ strokeDasharray: ["5 5", "10 10", "5 5"] }}
                                transition={{ duration: 9, repeat: Infinity, delay: 1 }}
                            />
                        </g>
                    </g>
                </motion.svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Main Featured Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative">
                            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-8 overflow-hidden group shadow-2xl transition-transform duration-500 hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <img
                                    src={logoTrial}
                                    alt="Mi Dentista Logo"
                                    className="w-full h-auto object-contain brightness-0 invert opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 text-white">
                        <div className="inline-block px-4 py-1 rounded-full bg-brand-secondary/30 backdrop-blur-md border border-brand-secondary/50 text-[10px] font-bold tracking-widest text-brand-white mb-4">
                            {featuredReview.treatment || "TESTIMONIO DESTACADO"}
                        </div>
                        <blockquote className="text-xl md:text-3xl font-extralight leading-tight mb-6 font-poppins italic">
                            "{featuredReview.text}"
                        </blockquote>
                        <p className="text-lg font-medium text-brand-white/90">
                            {featuredReview.name}
                        </p>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="relative">
                    {/* Google Reviews Info */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
                        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-xl">
                            <div className="bg-white p-1.5 rounded-lg">
                                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 w-auto" />
                            </div>
                            <div>
                                <div className="flex gap-0.5 mb-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-[10px] text-white/70 font-medium">69 reseñas Google</p>
                            </div>
                            <button className="ml-2 px-3 py-1.5 bg-brand-secondary/80 hover:bg-brand-secondary text-white text-[10px] font-bold rounded-lg transition-colors">
                                Escribe una reseña
                            </button>
                        </div>
                    </div>

                    {/* Embla Carousel */}
                    <div className="cursor-grab active:cursor-grabbing" ref={emblaRef}>
                        <div className="flex -ml-4 sm:-ml-6">
                            {carouselReviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 sm:pl-6 transition-all duration-300 ease-out"
                                    onMouseEnter={() => setHoveredId(review.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    style={{
                                        transform: hoveredId === review.id ? 'scale(1.05)' : 'scale(1)',
                                        zIndex: hoveredId === review.id ? 20 : 10
                                    }}
                                >
                                    <div className="bg-white p-6 rounded-xl shadow-xl h-full flex flex-col items-start text-left border border-white/20 transition-all duration-300 group">
                                        <div className="flex justify-between w-full mb-4">
                                            <div className="flex items-center gap-2.5">
                                                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shadow-inner", review.avatarColor)}>
                                                    {review.name[0]}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 leading-tight text-sm group-hover:text-brand-primary transition-colors">{review.name}</h4>
                                                    <p className="text-[10px] text-gray-500 font-medium">{review.time}</p>
                                                </div>
                                            </div>
                                            {review.source === 'doctoralia' ? (
                                                <img
                                                    src="https://prowly-prod.s3.eu-west-1.amazonaws.com/uploads/5726/assets/785978/-68b4501c42f9bb7edf4a9048ccca5cda.png"
                                                    alt="Doctoralia"
                                                    className="h-5 w-auto object-contain"
                                                />
                                            ) : (
                                                <img
                                                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                                                    alt="Google"
                                                    className="h-5 w-auto object-contain"
                                                />
                                            )}
                                        </div>

                                        <div className="flex gap-0.5 mb-3">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            ))}
                                            <CheckCircle2 className="w-3 h-3 text-blue-500 ml-1 fill-white" />
                                        </div>

                                        <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3 italic">
                                            "{review.text}"
                                        </p>

                                        <button className="mt-auto text-brand-primary text-[10px] font-bold hover:underline">
                                            VER RESEÑA
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
