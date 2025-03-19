 function byteSize(str) {
    // Create a TextEncoder instance
    const encoder = new TextEncoder();
    
    // Encode the string into a Uint8Array of UTF-8 bytes
    const encoded = encoder.encode(str);
    
    // Return the length of the Uint8Array, which is the size in bytes
    return encoded.length;
} 

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
