let IsAuthorizated = false;

export function enter() {
  IsAuthorizated = true;
}
export function output() {
  IsAuthorizated = false;
}
export function getAuthState() {
  return IsAuthorizated;
}
