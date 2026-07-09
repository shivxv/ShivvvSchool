import {
  HomeMetric,
  FeatureCard,
  Assignment,
  Faculty,
  ClassStructure,
  Notice,
  analyticalRevenueData,
  homeFeatures,
  homeMetrics,
  mockClasses,
  mockFaculty,
  mockNotices,
  studentAssignments,
  aboutHighlights,
} from './mockData';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchHomeMetrics = async (): Promise<HomeMetric[]> => {
  await delay(300);
  return homeMetrics;
};

export const fetchHomeFeatures = async (): Promise<FeatureCard[]> => {
  await delay(300);
  return homeFeatures;
};

export const fetchAboutHighlights = async (): Promise<FeatureCard[]> => {
  await delay(300);
  return aboutHighlights;
};

export const fetchStudentAssignments = async (): Promise<Assignment[]> => {
  await delay(300);
  return studentAssignments;
};

export const fetchFaculty = async (): Promise<Faculty[]> => {
  await delay(300);
  return mockFaculty;
};

export const fetchClasses = async (): Promise<ClassStructure[]> => {
  await delay(300);
  return mockClasses;
};

export const fetchNotices = async (): Promise<Notice[]> => {
  await delay(300);
  return mockNotices;
};

export const fetchAnalyticalRevenueData = async () => {
  await delay(300);
  return analyticalRevenueData;
};
