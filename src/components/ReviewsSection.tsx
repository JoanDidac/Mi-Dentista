
import React, { useEffect, useState, useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import logoTrial from "@/assets/logo-trial.png";
import { reviewsData, type Review } from "@/data/reviews-data";

const ReviewsSection = () => {
    // Randomize reviews on mount
    const [shuffledReviews, setShuffledReviews] = useState<Review[]>([]);

    useEffect(() => {
        // Fisher-Yates shuffle
        const array = [...reviewsData];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setShuffledReviews(array);
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
                        <blockquote className="text-xl md:text-3xl font-semibold leading-tight mb-6 font-montserrat italic">
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
                                            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-3 w-auto grayscale opacity-30" />
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
