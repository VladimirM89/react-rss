function getAllCharacterIds(count: number): string {
  let id = '';
  for (let i = 1; i <= count; i++) {
    id = `${id},${i}`;
  }
  return id;
}

export default getAllCharacterIds;
