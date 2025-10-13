import { useState } from "react";
import "./services.css";
import icons from '../../utils/iconMap';

const Services = () => {
  const [toggleModal, setToggleModal] = useState(0);

  const ArrowIcon = icons.arrow;
  const ArrowRightIcon = icons.arrowRight;
  const WebGridIcon = icons.webGrid;
  const ServerIcon = icons.server;
  const TimesIcon = icons.times;
  const CheckCircleIcon = icons.checkCircle;

  const handleTabToggle = (idx) => setToggleModal(idx);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <ArrowIcon className="services__icon" />
          <h3 className="services__title">Full Stack Development</h3>
          <p className="services__description">
            End-to-end web application development with modern technologies and best practices.
          </p>
          <span className="services__button" onClick={() => handleTabToggle(1)}>
            Learn More
            <ArrowRightIcon className="services__button-icon" />
          </span>
        </div>

        <div className="services__content">
          <WebGridIcon className="services__icon" />
          <h3 className="services__title">Frontend Development</h3>
          <p className="services__description">
            Beautiful, responsive user interfaces with React, TypeScript, and modern design systems.
          </p>
          <span className="services__button" onClick={() => handleTabToggle(2)}>
            Learn More
            <ArrowRightIcon className="services__button-icon" />
          </span>
        </div>

        <div className="services__content">
          <ServerIcon className="services__icon" />
          <h3 className="services__title">Backend Development</h3>
          <p className="services__description">
            Scalable server-side solutions with Node.js, databases, and cloud infrastructure.
          </p>
          <span className="services__button" onClick={() => handleTabToggle(3)}>
            Learn More
            <ArrowRightIcon className="services__button-icon" />
          </span>
        </div>
      </div>

      {/* Modals - Outside the cards */}
      <div className={`services__modal ${toggleModal === 1 && "active-modal"}`}>
        <div className="services__modal-content">
          <TimesIcon className="services__modal-close" onClick={() => handleTabToggle(0)} />
          <h3 className="services__modal-title">Full Stack Development</h3>
          <p className="services__modal-description">
            Enterprise-grade SaaS platform development with microservices architecture. I build scalable,
            production-ready applications with robust RBAC systems, end-to-end observability, and seamless CI/CD integration.
          </p>
          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                Enterprise SaaS platforms with multi-tenant architecture and hierarchical RBAC systems
              </p>
            </li>
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                Microservices architecture with Node.js, NestJS, and TypeScript for scalable backend systems
              </p>
            </li>
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                Company-wide SDK development with interactive playground environments and npm registry publishing
              </p>
            </li>
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                CI/CD pipeline setup with GitHub Actions and Azure Pipelines for automated testing and deployment
              </p>
            </li>
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                End-to-end observability using OpenTelemetry with custom logging SDKs for comprehensive monitoring
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={`services__modal ${toggleModal === 2 && "active-modal"}`}>
        <div className="services__modal-content">
          <TimesIcon className="services__modal-close" onClick={() => handleTabToggle(0)} />
          <h3 className="services__modal-title">Frontend Development</h3>
          <p className="services__modal-description">
            Modern micro-frontend architecture with React and TypeScript. I build scalable, performant user
            interfaces using module federation, single-spa, and advanced state management for enterprise applications.
          </p>
          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                Micro-frontend architecture using single-spa and module federation for scalable application integration
              </p>
            </li>
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                React.js with TypeScript, Redux, and modern hooks for type-safe, maintainable enterprise applications
              </p>
            </li>
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                Responsive UI development with SASS, TailwindCSS, and custom design systems for consistent branding
              </p>
            </li>
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                Real-time features with Socket.io for live updates, notifications, and collaborative functionality
              </p>
            </li>
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                Performance optimization with code splitting, lazy loading, and comprehensive testing frameworks
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={`services__modal ${toggleModal === 3 && "active-modal"}`}>
        <div className="services__modal-content">
          <TimesIcon className="services__modal-close" onClick={() => handleTabToggle(0)} />
          <h3 className="services__modal-title">Backend Development</h3>
          <p className="services__modal-description">
            Enterprise-grade backend systems with microservices architecture, advanced authentication, and cloud infrastructure.
            I build secure, scalable APIs with comprehensive monitoring and seamless third-party integrations.
          </p>
          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                Microservices architecture with Node.js, NestJS, and async patterns for high-performance systems
              </p>
            </li>
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                Database design and optimization with MongoDB, PostgreSQL, MSSQL, and Redis caching strategies
              </p>
            </li>
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                Sophisticated RBAC systems with Keycloak authentication and fine-grained API access control
              </p>
            </li>
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                Enterprise integrations including SharePoint, Azure AD, and payment gateways (Razorpay, PayPal)
              </p>
            </li>
            <li className="services__modal-service">
              <CheckCircleIcon className="services__modal-icon" />
              <p className="services__modal-info">
                Message queuing with Apache Kafka and event-driven architecture for distributed systems
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
