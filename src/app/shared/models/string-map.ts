/**
 * Define a kind of simple mapper object with strings as keys.
 */
export declare interface StringMap<V> {
  [key: string]: V;
}

/**
 * Map a list of keys to values and put them all in a StringMap.
 * @param keys The keys to map
 * @param mapper The mapping closure for each of those keys, returning a single value for this key to put into the map
 * @return the StringMap with type according to the result of the mapper function
 */
export function stringMap<V>(keys: string[], mapper: (key: string) => V): StringMap<V> {
  const map: StringMap<V> = {};
  keys.forEach(key => map[key] = mapper(key));
  return map;
}

/**
 * Map a list of values by extracting a key for each.
 * @param values The values to map
 * @param mappedBy The mapping closure for each of those values (and their corresponding index), returning the key to put it into the map
 * @return the StringMap with type according to the values
 */
export function stringMapBy<V>(values: V[], mappedBy: (value: V, index: number) => string): StringMap<V> {
  const map: StringMap<V> = {};
  values.forEach((value, index) => {
    const key = mappedBy(value, index);
    map[key] = value;
  });
  return map;
}

/**
 * Retrieve the value of an entry or create a new one.
 * <p>
 *   This is useful for handling maps of arrays. If a value isn't found in the map, it will be created using the factory method and
 *   placed in the map for later reference.
 * </p>
 * @param map The StringMap to query or augment
 * @param key Key of the entry
 * @param factory Factory closure in case there is no value yet
 * @return Value of the entry
 */
export function stringMapGetOrCreate<V>(map: StringMap<V>, key: string, factory: () => V): V {
  let value = map[key];
  if (value === undefined) {
    map[key] = value = factory();
  }
  return value;
}

/**
 * Convenience forEach function for StringMaps, for increased readability.
 * @param map The StringMap to iterate over (can be null, then it's ignored)
 * @param closure The iteration closure
 */
export function stringMapForEach<V>(map: StringMap<V>, closure: (value: V, key: string) => void): void {
  if (map) {
    Object.keys(map).forEach(key => {
      const value = map[key];
      closure(value, key);
    });
  }
}
