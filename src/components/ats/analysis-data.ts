export interface ATSAnalysis {
  atsScore: number;
  matchPercentage: number;
  missingKeywords: string[];
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
}

export const demoAnalysis: ATSAnalysis = {
  atsScore: 84,
  matchPercentage: 78,
  missingKeywords: ["Next.js", "REST API", "Docker", "CI/CD"],
  strengths: [
    "Good formatting and ATS-safe structure",
    "Strong technical skills and project alignment",
    "Clear experience progression",
  ],
  weaknesses: [
    "Missing quantified achievements in recent roles",
    "No certifications section listed",
  ],
  suggestions: [
    "Add more backend project details with impact metrics",
    "Include measurable achievements in each role bullet",
    "Mirror role keywords from the target job description",
  ],
};
