function extractVideoId(url: string): string | null {
    const regex: RegExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match: RegExpMatchArray | null = url.match(regex);
    if (match) {
        return match[1]; // Extracted video ID
    } else {
        return null; // No match found
    }
}

export { extractVideoId }