<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração de Sistema"
            sub="Cadastros & Cia" />
        <b-card no-body>
            <b-tabs>
                <b-tab title="Artigos" active><ArticleAdmin/></b-tab>
                <b-tab title="Categoria" ><CategoryAdmin /></b-tab>
                <b-tab title="Usuário" ><UserAdmin /></b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default {
    name: 'AdminPages',
    components: {PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin}
}
</script>

<style>

</style>