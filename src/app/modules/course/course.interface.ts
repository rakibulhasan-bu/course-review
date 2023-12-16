interface TTag {
  name: string;
  isDeleted: boolean;
}

export interface TCourse {
  title: string;
  instructor: string;
  categoryId: string;
  price: number;
  tags: TTag[];
  startDate: string;
  endDate: string;
  language: string;
  provider: string;
  durationInWeeks: number;
  details: {
    level: string;
    description: string;
  };
}
