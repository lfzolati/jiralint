// TODO Promote this to at least ReadonlyDeep
/* eslint functional/prefer-immutable-types: ["error", { "enforcement": "ReadonlyShallow" }] */
import * as T from "io-ts";
import * as ITT from "io-ts-types";

/**
 * Converts a codec into one that treats a missing property or null value as undefined.
 * @param t the type of the property - if it is supplied and not null.
 * @returns a codec that will treat missing property or null value as undefined.
 */
export const nullOrMissingToUndefined = <P, O = P>(
  t: T.Type<P, O>
): T.UnionC<[T.Type<P, O, unknown>, T.UndefinedC]> =>
  ITT.fromNullable(T.union([t, T.undefined]), undefined);
