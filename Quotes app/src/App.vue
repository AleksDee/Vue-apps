<template>
    <div class="container">
        <app-status-bar :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-status-bar>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a Quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewQuote from './components/NewQuote.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import StatusBar from './components/StatusBar.vue';
    export default {
        data(){
            return {
                quotes: ['Just a single quote'],
                maxQuotes: 10
            };
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appStatusBar: StatusBar
        },
        methods: {
            newQuote(quote){
                if(this.quotes.length >= this.maxQuotes){
                    return alert('Please, delete Quotes first!');
                }
                this.quotes.push(quote)
            },
            deleteQuote(index){
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
