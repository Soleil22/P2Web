export interface Mass {
    massValue: number;
    massExponent: number;
  }
  
  export interface Body {
    id: string;
    name: string;
    density: number | null;
    gravity: number | null;
    mass: Mass | null;
  }