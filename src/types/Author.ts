export interface Author {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'online' | 'offline';
    created: string;
  }