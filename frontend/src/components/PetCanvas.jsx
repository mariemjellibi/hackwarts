import React, { useRef, useEffect, useState } from 'react';

const PetCanvas = ({ pet }) => {
  const canvasRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let petPos = { x: 200, y: 300 }; // Initial position of the pet
    let petVelocity = 0; // Vertical velocity for jump

    const drawPet = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      // Draw the pet (circle as an example)
      ctx.beginPath();
      ctx.arc(petPos.x, petPos.y, 50, 0, Math.PI * 2);
      ctx.fillStyle = 'orange'; // Pet color
      ctx.fill();

      // Handle jumping
      if (isJumping) {
        petVelocity += 0.5; // Gravity
        petPos.y += petVelocity;

        // Stop jumping when it hits the ground
        if (petPos.y >= 300) {
          petPos.y = 300;
          petVelocity = 0;
          setIsJumping(false); // Stop jumping when on the ground
        }
      }

      // Handle movement (move right when 'isMoving' is true)
      if (isMoving) {
        petPos.x += 10; // Move right
        setIsMoving(false); // Reset after movement
      }
    };

    const animate = () => {
      drawPet();
      requestAnimationFrame(animate); // Request the next frame
    };

    animate(); // Start the animation loop

    // Event listeners for interactions
    const handleJump = () => {
      if (!isJumping) {
        setIsJumping(true);
      }
    };

    const handleMove = (e) => {
      if (e.key === 'ArrowRight') {
        setIsMoving(true);
      }
    };

    window.addEventListener('click', handleJump); // Jump on click
    window.addEventListener('keydown', handleMove); // Move on key press (e.g., right arrow)

    return () => {
      window.removeEventListener('click', handleJump);
      window.removeEventListener('keydown', handleMove);
    };
  }, [isJumping, isMoving]);

  return (
    <div>
      <canvas ref={canvasRef} width={500} height={500} />
      <button onClick={() => setIsJumping(true)} className="bg-blue-500 text-white p-2 rounded mt-4">
        Feed Pet (Jump)
      </button>
      <button onClick={() => setIsMoving(true)} className="bg-yellow-500 text-white p-2 rounded mt-4">
        Play with Pet (Move)
      </button>
    </div>
  );
};

export default PetCanvas;
