export function isFilePath(path: string): boolean {
  // Regular expression for basic file path validation (supports common separators)
  const filePathRegex =
    /^([a-zA-Z0-9_\-\.]+\/)*[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,4}$/;

  // Check if the path matches the regex
  return filePathRegex.test(path);
}
