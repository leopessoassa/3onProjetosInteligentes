import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import TagManager from "react-gtm-module";

interface GTMContextType {
  trackEvent: (event: GTMEvent) => void;
  trackPageView: (page: string, title?: string) => void;
  trackConversion: (event: GTMConversionEvent) => void;
  trackCustomEvent: (
    eventName: string,
    parameters?: Record<string, any>
  ) => void;
  setUserProperties: (properties: Record<string, any>) => void;
}

interface GTMEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

interface GTMConversionEvent {
  event: string;
  transaction_id?: string;
  value?: number;
  currency?: string;
  items?: Array<{
    item_id: string;
    item_name: string;
    category?: string;
    quantity?: number;
    price?: number;
  }>;
  [key: string]: any;
}

interface GTMProviderProps {
  children: ReactNode;
  gtmId: string;
  dataLayer?: Record<string, any>;
  dataLayerName?: string;
  auth?: string;
  preview?: string;
  environment?: string;
  debug?: boolean;
}

const GTMContext = createContext<GTMContextType | undefined>(undefined);

export const GTMProvider: React.FC<GTMProviderProps> = ({
  children,
  gtmId,
  dataLayer = {},
  dataLayerName = "dataLayer",
  auth,
  preview,
  environment,
  debug = false,
}) => {
  useEffect(() => {
    // Configuração do GTM
    const gtmArgs = {
      gtmId,
      dataLayer,
      dataLayerName,
      ...(auth && { auth }),
      ...(preview && { preview }),
      ...(environment && { environment }),
    };

    // Inicializa o GTM
    TagManager.initialize(gtmArgs);

    if (debug) {
      console.log("GTM initialized with:", gtmArgs);
    }

    // Cleanup não é necessário pois o GTM persiste durante toda a sessão
  }, [gtmId, dataLayerName, auth, preview, environment, debug]);

  const trackEvent = (e: GTMEvent) => {
    try {
      TagManager.dataLayer({
        dataLayer: {
          event: e.event,
          eventCategory: e.category,
          eventAction: e.action,
          eventLabel: e.label,
          eventValue: e.value,
        },
      });

      if (debug) {
        console.log("GTM Event tracked:", event);
      }
    } catch (error) {
      console.error("Error tracking GTM event:", error);
    }
  };

  const trackPageView = (page: string, title?: string) => {
    try {
      TagManager.dataLayer({
        dataLayer: {
          event: "page_view",
          page_title: title || document.title,
          page_location: window.location.href,
          page_path: page,
        },
      });

      if (debug) {
        console.log("GTM Page view tracked:", { page, title });
      }
    } catch (error) {
      console.error("Error tracking GTM page view:", error);
    }
  };

  const trackConversion = (e: GTMConversionEvent) => {
    try {
      TagManager.dataLayer({
        dataLayer: {
          event: e.event,
          ecommerce: {
            transaction_id: e.transaction_id,
            value: e.value,
            currency: e.currency || "BRL",
            items: e.items || [],
          },
        },
      });

      if (debug) {
        console.log("GTM Conversion tracked:", event);
      }
    } catch (error) {
      console.error("Error tracking GTM conversion:", error);
    }
  };

  const trackCustomEvent = (
    eventName: string,
    parameters: Record<string, any> = {}
  ) => {
    try {
      TagManager.dataLayer({
        dataLayer: {
          event: eventName,
          ...parameters,
        },
      });

      if (debug) {
        console.log("GTM Custom event tracked:", { eventName, parameters });
      }
    } catch (error) {
      console.error("Error tracking GTM custom event:", error);
    }
  };

  const setUserProperties = (properties: Record<string, any>) => {
    try {
      TagManager.dataLayer({
        dataLayer: {
          event: "user_properties_set",
          user_properties: properties,
        },
      });

      if (debug) {
        console.log("GTM User properties set:", properties);
      }
    } catch (error) {
      console.error("Error setting GTM user properties:", error);
    }
  };

  const contextValue: GTMContextType = {
    trackEvent,
    trackPageView,
    trackConversion,
    trackCustomEvent,
    setUserProperties,
  };

  return (
    <GTMContext.Provider value={contextValue}>{children}</GTMContext.Provider>
  );
};

// Hook para usar o contexto
export const useGTM = (): GTMContextType => {
  const context = useContext(GTMContext);
  if (!context) {
    throw new Error("useGTM must be used within a GTMProvider");
  }
  return context;
};

// Hook para tracking automático de página (para uso com React Router)
export const useGTMPageTracking = () => {
    const ref = useRef<string>(null);
    const { trackPageView } = useGTM();


  useEffect(() => {
    if (ref.current === window.location.pathname) return;
    ref.current = window.location.pathname;
    trackPageView(window.location.pathname, window.document.title);
  }, [trackPageView]);
};

// Componente para tracking automático de página
export const GTMPageTracker: React.FC = () => {
  useGTMPageTracking();
  return null;
};
