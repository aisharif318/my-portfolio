import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const projects = [
  {
    title: "Long-Form Edits",
    type: "landscape",
    videos: [
      "/images/Videos/Long from edits 16,9/01 Long from edits.mp4",
      "/images/Videos/Long from edits 16,9/02 Long from edits.mp4",
      "/images/Videos/Long from edits 16,9/03 Long from edits.mp4"
    ].sort((a, b) => a.localeCompare(b))
  },
  {
    title: "Shorts & Reels",
    type: "vertical",
    videos: [
      "/images/Videos/Shorts & Reels 9,16/01 Shorts & Reels.mp4",
      "/images/Videos/Shorts & Reels 9,16/02 Shorts & Reels.mp4",
      "/images/Videos/Shorts & Reels 9,16/03 Shorts & Reels.mp4",
      "/images/Videos/Shorts & Reels 9,16/04 Shorts & Reels.mp4",
      "/images/Videos/Shorts & Reels 9,16/05 Shorts & Reels.mp4",
      "/images/Videos/Shorts & Reels 9,16/06 Shorts & Reels.mp4",
      "/images/Videos/Shorts & Reels 9,16/07 Shorts & Reels.mp4"
    ].sort((a, b) => a.localeCompare(b))
  },
  {
    title: "Promo Videos",
    type: "vertical",
    videos: [
      "/images/Videos/Promo Videos 4,6/01 Promo Videos.mp4",
      "/images/Videos/Promo Videos 4,6/02 Promo Videos.mp4",
      "/images/Videos/Promo Videos 4,6/03 Promo Videos.mp4",
      "/images/Videos/Promo Videos 4,6/04 Promo Videos.mp4"
    ].sort((a, b) => a.localeCompare(b))
  }
];

const ProjectVideos = ({ project }: { project: any }) => {
  const [videoIndex, setVideoIndex] = useState(0);
  if (!project.videos || project.videos.length === 0) return null;

  const handleUp = () => {
    setVideoIndex((prev) => (prev === 0 ? project.videos.length - 1 : prev - 1));
  };
  const handleDown = () => {
    setVideoIndex((prev) => (prev === project.videos.length - 1 ? 0 : prev + 1));
  };

  const v1 = project.videos[videoIndex];
  const v2 = project.videos[(videoIndex + 1) % project.videos.length];

  const isLandscape = project.type === "landscape";

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: "100%", 
      width: "100%", 
      padding: "1.5rem",   /* p-6 */
      gap: "2rem",         /* gap-8 */
      boxSizing: "border-box" 
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: isLandscape ? 'column' : 'row', 
        gap: '2rem',       /* gap-8 */
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: isLandscape ? "32rem" : "40rem",  /* max-w-lg / xl */
        maxHeight: "36rem",
        flex: 1
      }}>
        <video 
          src={v1} 
          autoPlay loop muted playsInline 
          style={{ 
            width: isLandscape ? "100%" : "calc(50% - 1rem)", 
            height: isLandscape ? "auto" : "100%", 
            maxHeight: isLandscape ? "14rem" : "28rem",
            objectFit: "cover", 
            borderRadius: "1rem",  /* rounded-2xl */
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.5), 0 4px 6px -4px rgba(0,0,0,0.5)", /* shadow-lg */
          }} 
        />
        {project.videos.length > 1 && (
          <video 
            src={v2} 
            autoPlay loop muted playsInline 
            style={{ 
              width: isLandscape ? "100%" : "calc(50% - 1rem)", 
              height: isLandscape ? "auto" : "100%",
              maxHeight: isLandscape ? "14rem" : "28rem",
              objectFit: "cover", 
              borderRadius: "1rem",  /* rounded-2xl */
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.5), 0 4px 6px -4px rgba(0,0,0,0.5)" /* shadow-lg */
            }} 
          />
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
        <button onClick={handleUp} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontSize: '1.5rem', backdropFilter: 'blur(10px)', transition: "all 0.2s" }}>
          <MdKeyboardArrowUp />
        </button>
        <button onClick={handleDown} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontSize: '1.5rem', backdropFilter: 'blur(10px)', transition: "all 0.2s" }}>
          <MdKeyboardArrowDown />
        </button>
      </div>
    </div>
  );
};

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <ProjectVideos project={project} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
