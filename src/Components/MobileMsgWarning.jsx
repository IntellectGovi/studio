import { useState, useEffect } from "react";

const MobileWarningMessage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    handleResize();

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    isMobile && (
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white text-center py-2">
        Mobile view is still under development. Please view on a bigger screen.
      </div>
    )
  );
};

export default MobileWarningMessage;
