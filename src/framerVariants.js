export const navBarVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            duration: 1,
        }
    }
}

export const navLinkVariants = {
    hover: {
        scale: 1.1,
        color: '#00f6ff',
        transition: {
            duration: 0.3,
        }
    },
}

export  const heroDiscountVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: Infinity,
        }
    }
}

export const heroImgVariants = {
    hidden: {
        opacity: 0,
        x: '100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2.2,
        }
    }
}

export const textVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.8,
        }
    }
}

export const btnVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
        }
    },
}

export const billingImgVariants = {
    hidden: {
        opacity: 0,
        x: '-100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2.2,
        }
    }
}

export const cardDealImgVariants = {
    hidden: {
        opacity: 0,
        x: '100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2.2,
        }
    }
}