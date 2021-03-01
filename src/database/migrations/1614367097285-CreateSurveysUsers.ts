import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSurveysUsers1614367097285 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "surveys_users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "survey_id",
            type: "uuid",
          },
          {
            name: "value",
            type: "numeric",
            isNullable: true,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKSurveys",
            referencedTableName: "surveys",
            referencedColumnNames: ["id"],
            columnNames: ["survey_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("surveys_users");
  }
}
