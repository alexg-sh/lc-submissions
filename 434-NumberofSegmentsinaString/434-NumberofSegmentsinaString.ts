// Last updated: 10/6/2025, 8:31:20 PM
function countSegments(s: string): number {
  return s.trim().split(/\s+/).filter(segment => segment.length > 0).length;
};