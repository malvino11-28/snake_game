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
  const arraySize = array.length;

  console.log(arraySize);
}

const CompleteMap: Array<orientationMapProps | string>[] = [];

createMap({ array: CompleteMap, food: "F" });

console.log(CompleteMap);
