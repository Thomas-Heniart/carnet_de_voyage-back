import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('medias', tableBuilder => {
        tableBuilder.increments('id');
        tableBuilder.string('media_name');
        tableBuilder.string('media_url');
        tableBuilder.string('media_extension');
        tableBuilder.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('medias')
}

exports.config = {transaction: false};

