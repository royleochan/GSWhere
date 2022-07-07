import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DeskDetailsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class DeskDetails {
  readonly id: string;
  readonly Floor?: string | null;
  readonly Location?: string | null;
  readonly Country?: string | null;
  readonly Region?: string | null;
  readonly Hardware?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DeskDetails, DeskDetailsMetaData>);
  static copyOf(source: DeskDetails, mutator: (draft: MutableModel<DeskDetails, DeskDetailsMetaData>) => MutableModel<DeskDetails, DeskDetailsMetaData> | void): DeskDetails;
}