import {
  CplusplusOriginal,
  Css3Original,
  GoOriginal,
  Html5Original,
  LaravelOriginal,
  MongodbOriginal,
  MysqlOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  ReactOriginal,
  TailwindcssOriginal,
} from "devicons-react";

export const skillRows = [
  {
    type: "Frontend",
    skills: [
      { Icon: Html5Original, value: 95 },
      { Icon: Css3Original, value: 90 },
      { Icon: ReactOriginal, value: 80 },
      { Icon: TailwindcssOriginal, value: 85 },
    ],
  },
  {
    type: "Backend",
    skills: [
      { Icon: NodejsOriginal, value: 80 },
      { Icon: GoOriginal, value: 75 },
      { Icon: LaravelOriginal, value: 80 },
    ],
  },
  {
    type: "Others",
    skills: [
      { Icon: CplusplusOriginal, value: 70 },
      { Icon: PostgresqlOriginal, value: 75 },
      { Icon: MongodbOriginal, value: 80 },
      { Icon: MysqlOriginal, value: 80 },
    ],
  },
];
