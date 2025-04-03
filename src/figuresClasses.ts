export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  public a: number;

  public b: number;

  public c: number;

  public color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    const max: number = Math.max(a, b, c);
    const sum: number = a + b + c - max;

    if (a <= 0 || b <= 0 || c <= 0 || max >= sum) {
      throw new Error('your error message');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const s = (1 / 2) * (this.a + this.b + this.c);

    return Number(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  public radius: number;

  public color: 'red' | 'green' | 'blue';

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error('your error message');
    }

    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.round(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  public width: number;

  public height: number;

  public color: 'red' | 'green' | 'blue';

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }

    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
