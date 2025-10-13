const WorkCard = ({ item }) => {
  // Handle both optimized image objects and plain URLs (for placeholder images)
  const isOptimizedImage = typeof item.image === 'object' && item.image.src;
  
  const imgProps = isOptimizedImage
    ? {
        src: item.image.src,
        srcSet: item.image.srcSet,
        sizes: item.image.sizes,
        width: item.image.width,
        height: item.image.height,
      }
    : {
        src: item.image,
        width: 400,
        height: 300,
      };

  return (
    <div className="work__card" key={item.id}>
      <div className="work__img-wrapper">
        <img 
          {...imgProps}
          alt={item.title}
          className="work__img"
          loading="lazy"
        />
        {item.type && (
          <span className="work__type-badge">{item.type}</span>
        )}
        {item.isPlaceholder && (
          <span className="work__placeholder-badge">Confidential Project</span>
        )}
      </div>
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      {/* <div className="work__buttons">
        {item.projectLinks.project && (
          <a 
            href={item.projectLinks.project} 
            target="_blank" 
            rel="noopener noreferrer"
            className="work__button"
          >
            Live Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}
        {item.projectLinks.repo && (
          <a 
            href={typeof item.projectLinks.repo === 'string' ? item.projectLinks.repo : item.projectLinks.repo.frontend} 
            target="_blank" 
            rel="noopener noreferrer"
            className="work__button work__button--secondary"
          >
            <i className="bx bxl-github"></i> Code
          </a>
        )}
      </div> */}
    </div>
  );
};

export default WorkCard;
