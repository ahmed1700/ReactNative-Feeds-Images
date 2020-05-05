export default function getAvatarColor(fullName) {
    const hexaCode =
        fullName.split('')
            .reduce((result, char) => (result * char.charCodeAt(0)) % 0xFFFFFF, 1)
            .toString(16);
    return `#${hexaCode}`;
}

// Ahmed RBAE
// STRING TO ARRAY OF CHARACTER
// CHARACTER TO HEXA 
// 255 255 255  == White
// FixedValue 