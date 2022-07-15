import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { AnyObject } from '@gilbarbara/types';
import produce from 'immer';
import is from 'is-lite';
import { PartialDeep } from 'type-fest';

export function useLocalStorageState<T extends AnyObject>(
  key: string,
  initialValue: T,
  { serializer = JSON.stringify, deserializer = JSON.parse } = {},
): [state: T, setState: (state: PartialDeep<T>) => void] {
  const [value, setValue] = useLocalStorage(key, initialValue, {
    raw: false,
    serializer,
    deserializer,
  });
  const [state, set] = useState<T>({ ...initialValue, ...value });

  useEffect(() => {
    setValue(state);
  }, [setValue, state]);

  const setState = useCallback((patch: PartialDeep<T> | ((previousState: T) => T)) => {
    set(previousState => {
      const nextState = patch instanceof Function ? patch(previousState) : patch;

      return produce(previousState, draft => {
        // eslint-disable-next-line no-restricted-syntax
        for (const draftKey in draft) {
          if ({}.hasOwnProperty.call(draft, draftKey)) {
            const current = draft[draftKey];
            const next = nextState[draftKey];

            if (is.plainObject(current) && is.plainObject(next)) {
              Object.assign(draft[draftKey], next);
            } else if (!is.undefined(next)) {
              // @ts-ignore
              draft[draftKey] = next;
            }
          }
        }
      });
    });
  }, []);

  return [state, setState];
}
