import { keyframes } from 'styled-components';

export const hovering = keyframes`
    0% {
		transform: translate(0,-10px);
    }
    25% {
		transform: translate(-10px,0);
    }
    50% {
		transform: translate(0,10px);
    }
    75% {
		transform: translate(10px,0);
    }
    100% {
		transform: translate(0,-10px);
    }
`;

export const scaling = keyframes`
    0% {
		transform: scale(1);
    }
    50% {
		transform: scale(0.5);
    }
    100% {
		transform: scale(1);
    }
`;

export const cloudMove = keyframes`
    0% {
		transform: translateX(0);
    }
    50% {
		transform: translateX(25px);
    }
    100% {
		transform: translateX(0);
    }
`;

export const cloudReverseMove = keyframes`
    0% {
		  transform: translateX(-25px);
    }
    50% {
		  transform: translateX(0);
    }
    100% {
		  transform: translateX(-25px);
    }
`;

export const flagRotate = keyframes`
    0% {
		transform: rotate(-5deg);
    }
    50% {
		transform: rotate(5deg);
    }
    100% {
		transform: rotate(-5deg);
    }
`;

export const flagRotateReverse = keyframes`
    0% {
		transform: rotate(5deg);
    }
    50% {
		transform: rotate(-5deg);
    }
    100% {
		transform: rotate(5deg);
    }
`;

export const fadeInTop = keyframes`
	from {
		opacity: 0;
		transform: translateY(-50%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const fadeInRight25 = keyframes`
	from {
		opacity: 0;
		transform: translateX(25%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const fadeInRight25Opac40 = keyframes`
	from {
		opacity: 0;
		transform: translateX(25%);
	}
	to {
		opacity: 0.4;
		transform: translateY(0);
	}
`;

export const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translateY(-50px) scale(0.8);
	}
	to {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
`;

export const fadeInFlip = keyframes`
	from {
		opacity: 0;
		transform: rotateY(90deg);
	}
	to {
		opacity: 1;
		transform: rotateY(0deg);
	}
`;

// nlo with cat animation
export const beamColor = keyframes`
	0% {
		stop-color: #D5EAFD;
	}
	1% {
		stop-color: #fff;
	}
	2% {
		stop-color: #D5EAFD;
	}
	3% {
		stop-color: #fff;
	}
	4% {
		stop-color: #D5EAFD;
	}
	5% {
		stop-color: #fff;
	}
	15.5% {
		stop-color: #D5EAFD;
	}
`;

export const rotateMoveXY = keyframes`
	0% {
		transform: rotate(0deg) translate(0,0);
	}
	25% {
		transform: rotate(90deg) translate(10px,-10px);
	}
	50% {
		transform: rotate(180deg) translate(0,0);
	}
	75% {
		transform: rotate(270deg) translate(-10px,10px);
	}
	100% {
		transform: rotate(360deg) translate(0,0);
	}
`;
