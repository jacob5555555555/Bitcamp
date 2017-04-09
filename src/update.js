// @flow
// import type {Model} from './model';
import type {Drawing} from './drawing';

export type Update = {
}

export type LobbyUpdate = {
  name: "LobbyUpdate",
  players: Array<string>
}

export type PromptUpdate = {
  name: "PromptUpdate"
}

export type DescribeUpdate = {
  name: "DescribeUpdate",
  drawing: Drawing
}

export type DrawUpdate = {
  name: "DrawUpdate",
  description: string
}

export type EndgameUpdate = {

}
