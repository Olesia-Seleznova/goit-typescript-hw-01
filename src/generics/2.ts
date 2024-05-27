type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

type compare = <T extends AllType, U extends AllType>(
  top: Pick<T, "name" | "color">,
  bottom: Pick<U, "position" | "weight">
) => AllType;
