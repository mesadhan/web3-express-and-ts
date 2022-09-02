import {Contains, Length, Min} from "class-validator";

export class VerificationEntity {
  @Min(0)
  public account: string | undefined;
  @Min(0)
  signature: string | undefined;
}
