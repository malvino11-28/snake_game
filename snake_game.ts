interface snakeProps {
  body: string;
  head: string;
  size: number;
}

type orientationMapProps = {
  vertical: string;
  horizontal: string;
};

type mapProps = {
  array: Array<orientationMapProps | string>[];
  food: string | "F";
};

function createMap({ array, food }: mapProps) {
  for (let i = 0; i < 5; i++) {
    let newLine = [];
    for (let j = 0; j < 3; j++) {
      newLine.push(" ");
    }
    array.push(newLine);
  }

  const totalColumns = array[0].length;
  const arraySize = array.length * array[0].length;

  const randomFoodPosition = Math.floor(Math.random() * arraySize);

  const line = Math.floor(randomFoodPosition / totalColumns);
  const column = randomFoodPosition % totalColumns;

  array[line].splice(column, 1, food);
}

const CompleteMap: Array<orientationMapProps | string>[] = [];

createMap({ array: CompleteMap, food: "F" });

console.log(CompleteMap);
