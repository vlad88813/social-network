interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "bla-bla",
  size: {
    width: 20,
    height: 10,
  },
  color: "#ccc",
};

const rect2: Rect = {
  id: "bla-bla",
  size: {
    width: 10,
    height: 8,
  },
};

rect2.color = "red";
// rect2.id='fffff' // нельзя, так как readOnly

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//==============
