"use client"; // <--- This directive is the essential fix!

import { Button } from "@/components/ui/button";

// This component uses a client-side event handler (onClick) and must be marked "use client".
export function InteractiveButton() {
    
  // The event handler is now defined inside the client component, 
  // so it never needs to be passed over the server-client boundary.
  const handleClick = () => {
    // You could also use useState or other React hooks here.
    console.log('Button clicked!'); 
    alert('Button interaction confirmed on the client!');
  };

  return (
    <Button 
      onClick={handleClick} 
      variant="default" 
      size="lg"
    >
      Click Me (Client Component)
    </Button>
  );
}