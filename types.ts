
export interface Project {
  id: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
