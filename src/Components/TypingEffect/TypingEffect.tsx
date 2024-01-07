import React, { useState, useEffect, useRef } from 'react';

export const TypingEffect: React.FC = () => {
  const [charIndex, setCharIndex] = useState(0);
  const [typingText, setTypingText] = useState<string | null>("");
  const [count, setCount] = useState(0);

  const typeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const eraseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log('useEffect triggered');

    function typeAndErase(text: string, delay: number) {
      if (charIndex < text.length) {
        setTypingText(typingText + text[charIndex]);
        setCharIndex(charIndex + 1);
        // Recursive call to typeAndErase
        typeTimeoutRef.current = setTimeout(() => typeAndErase(text, 100), 100) ;
      } else {
        // Recursive call to erase when the text is typed
        eraseTimeoutRef.current = setTimeout(() => erase(text), delay);
      }
    }

    function erase(text: string) {
      // Check if text is typed
      if (charIndex > 0) {
        // Erase the text
        setTypingText(text.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        // Recursive call to erase
        eraseTimeoutRef.current = setTimeout(() => erase(text), 50);
      } else {
        // If the text is erased, start typing the next text
        setCharIndex(0);
        const nextText = count === 0 ? "Hello, this is Bernard" : "Hello, this is Kirk";
        // Set delay to 1 second to simulate a pause after erasing
        typeTimeoutRef.current = setTimeout(() => typeAndErase(nextText, 1000), 1000);
        setCount(1 - count);
      }
    }

    // Start directly with the deletion and subsequent text typing
    erase("");

    // Cleanup function to clear timeouts when the component unmounts
    return () => {
      if (typeTimeoutRef.current) clearTimeout(typeTimeoutRef.current);
      if (eraseTimeoutRef.current) clearTimeout(eraseTimeoutRef.current);
    };
  }, [charIndex]);

  console.log('Rendering:', typingText);

  return <div id="typing-text">{typingText}</div>;
};
