
import React, { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Lightbulb, RotateCw, X, HelpCircle, Save, BookOpen } from 'lucide-react';

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState('');
  const [orientation, setOrientation] = useState<'white' | 'black'>('white');
  const [aiLevel, setAiLevel] = useState('easy');
  const [loading, setLoading] = useState(false);
  const [tutorial, setTutorial] = useState(false);
  const [currentTutorial, setCurrentTutorial] = useState(0);
  const [gameMode, setGameMode] = useState<'ai' | 'player'>('ai');

  // Chess tutorials
  const tutorials = [
    {
      title: "Basic Movement",
      description: "The Pawn moves forward one square, but captures diagonally. On its first move, it can advance two squares.",
      piece: "♟"
    },
    {
      title: "The Knight",
      description: "The Knight moves in an L-shape: two squares in one direction, then one square perpendicular. Knights can jump over other pieces.",
      piece: "♞"
    },
    {
      title: "The Bishop",
      description: "The Bishop moves diagonally any number of squares. It cannot jump over other pieces.",
      piece: "♝"
    },
    {
      title: "The Rook",
      description: "The Rook moves horizontally or vertically any number of squares. It cannot jump over other pieces.",
      piece: "♜"
    },
    {
      title: "The Queen",
      description: "The Queen is the most powerful piece, combining the movement of the Rook and Bishop. She can move any number of squares in any direction.",
      piece: "♛"
    },
    {
      title: "The King",
      description: "The King can move one square in any direction. The goal of the game is to checkmate your opponent's King.",
      piece: "♚"
    }
  ];

  // Initialize the game
  useEffect(() => {
    setFen(game.fen());
  }, []);

  // Function to make a move
  const makeAMove = (move: any) => {
    try {
      const result = game.move(move);
      if (result === null) return false;
      setFen(game.fen());
      
      if (gameMode === 'ai' && !game.isGameOver()) {
        setTimeout(makeAiMove, 300);
      }
      
      return true;
    } catch (error) {
      return false;
    }
  };

  // AI move logic
  const makeAiMove = () => {
    setLoading(true);
    
    const possibleMoves = game.moves();
    if (possibleMoves.length === 0 || game.isGameOver()) {
      setLoading(false);
      return;
    }
    
    let move;
    
    switch (aiLevel) {
      case 'hard':
        // Simulate a more sophisticated AI by prioritizing certain moves
        // In a real app, you would implement a more advanced algorithm
        const checkMoves = possibleMoves.filter(move => move.includes('+'));
        const captureMoves = possibleMoves.filter(move => move.includes('x'));
        
        if (checkMoves.length > 0) {
          move = checkMoves[Math.floor(Math.random() * checkMoves.length)];
        } else if (captureMoves.length > 0) {
          move = captureMoves[Math.floor(Math.random() * captureMoves.length)];
        } else {
          move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        }
        break;
        
      case 'medium':
        // Medium difficulty - prioritize captures sometimes
        const captures = possibleMoves.filter(move => move.includes('x'));
        if (captures.length > 0 && Math.random() > 0.5) {
          move = captures[Math.floor(Math.random() * captures.length)];
        } else {
          move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        }
        break;
        
      case 'easy':
      default:
        // Easy difficulty - random moves
        move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        break;
    }
    
    setTimeout(() => {
      makeAMove(move);
      setLoading(false);
    }, 500);
  };

  // Handle piece drop on the board
  const onDrop = (sourceSquare: string, targetSquare: string) => {
    if (loading) return false;
    
    const move = {
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q' // Always promote to queen for simplicity
    };
    
    return makeAMove(move);
  };

  // Reset the game
  const resetGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    setFen(newGame.fen());
  };

  // Flip the board
  const flipBoard = () => {
    setOrientation(orientation === 'white' ? 'black' : 'white');
  };

  // Save game (would connect to user account in full implementation)
  const saveGame = () => {
    // In a real app, this would save to a database
    localStorage.setItem('savedChessGame', game.fen());
    alert('Game saved successfully!');
  };

  // Load game
  const loadGame = () => {
    try {
      const savedGame = localStorage.getItem('savedChessGame');
      if (savedGame) {
        const loadedGame = new Chess(savedGame);
        setGame(loadedGame);
        setFen(loadedGame.fen());
      }
    } catch (error) {
      console.error('Error loading game:', error);
    }
  };

  // Next tutorial
  const nextTutorial = () => {
    if (currentTutorial < tutorials.length - 1) {
      setCurrentTutorial(currentTutorial + 1);
    } else {
      setTutorial(false);
    }
  };

  // Previous tutorial
  const prevTutorial = () => {
    if (currentTutorial > 0) {
      setCurrentTutorial(currentTutorial - 1);
    }
  };

  return (
    <div className="chess-card overflow-hidden">
      <div className="bg-card p-4 sm:p-6 relative">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            <span className="gold-gradient">Play Chess</span>
          </h2>
          
          <div className="flex items-center gap-2 flex-wrap">
            <Select
              value={gameMode}
              onValueChange={(value: any) => {
                setGameMode(value);
                resetGame();
              }}
            >
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Game Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ai">vs Computer</SelectItem>
                <SelectItem value="player">Two Player</SelectItem>
              </SelectContent>
            </Select>
            
            {gameMode === 'ai' && (
              <Select 
                value={aiLevel} 
                onValueChange={(value: any) => setAiLevel(value)}
              >
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="AI Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
        </div>
        
        {/* Game status */}
        <div className="mb-4 text-sm text-muted-foreground text-center">
          {game.isCheckmate() ? (
            <div className="text-chess-gold font-bold">Checkmate! {game.turn() === 'w' ? 'Black' : 'White'} wins!</div>
          ) : game.isDraw() ? (
            <div className="font-bold">Game drawn!</div>
          ) : game.isCheck() ? (
            <div className="text-chess-emerald font-bold">Check!</div>
          ) : (
            <div>{game.turn() === 'w' ? 'White' : 'Black'} to move</div>
          )}
          {loading && <div className="mt-1 italic">Computer is thinking...</div>}
        </div>
        
        {/* Chess board */}
        <div className="max-w-md mx-auto border-4 border-chess-dark/50 rounded-md overflow-hidden">
          <Chessboard 
            position={fen}
            onPieceDrop={onDrop}
            boardOrientation={orientation}
            customBoardStyle={{ 
              borderRadius: '0.375rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            customDarkSquareStyle={{ backgroundColor: '#1A1F2C' }}
            customLightSquareStyle={{ backgroundColor: '#2A3142' }}
          />
        </div>
        
        {/* Game controls */}
        <div className="flex flex-wrap justify-center mt-6 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetGame}
            className="gap-1"
          >
            <RotateCw className="h-4 w-4" />
            Reset
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={flipBoard}
            className="gap-1"
          >
            <RotateCw className="h-4 w-4 rotate-90" />
            Flip Board
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setTutorial(true)}
            className="gap-1"
          >
            <HelpCircle className="h-4 w-4" />
            Tutorial
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={saveGame}
            className="gap-1"
          >
            <Save className="h-4 w-4" />
            Save Game
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={loadGame}
            className="gap-1"
          >
            <BookOpen className="h-4 w-4" />
            Load Game
          </Button>
        </div>
      </div>
      
      {/* Hint for full features */}
      <div className="bg-muted p-3 text-sm text-center text-muted-foreground border-t border-border">
        <div className="flex items-center justify-center gap-2">
          <Lightbulb className="h-4 w-4 text-chess-gold" />
          <span>Sign up for a free account to track your progress and play with other members!</span>
        </div>
      </div>
      
      {/* Tutorial Dialog */}
      <AlertDialog open={tutorial} onOpenChange={setTutorial}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center justify-between">
              <AlertDialogTitle className="text-2xl flex items-center gap-2">
                <span className="text-chess-gold text-3xl">{tutorials[currentTutorial].piece}</span>
                {tutorials[currentTutorial].title}
              </AlertDialogTitle>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setTutorial(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <AlertDialogDescription className="text-base pt-4">
              {tutorials[currentTutorial].description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={prevTutorial}
                disabled={currentTutorial === 0}
              >
                Previous
              </Button>
              <Button 
                onClick={nextTutorial}
              >
                {currentTutorial === tutorials.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              {currentTutorial + 1} of {tutorials.length}
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ChessGame;
