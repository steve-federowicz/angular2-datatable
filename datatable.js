var dataTable_directive = require('./lib/DataTable');
var defaultSorter_directive = require('./lib/DefaultSorter');
var paginator_component = require('./lib/Paginator');
var bootstrapPaginator_component = require('./lib/BootstrapPaginator');
var semanticPaginator_component = require('./lib/SemanticPaginator');


exports.DataTable = dataTable_directive.DataTable;
exports.DataEvent = dataTable_directive.DataEvent;
exports.PageEvent = dataTable_directive.PageEvent;
exports.SortEvent = dataTable_directive.SortEvent;
exports.DefaultSorter = defaultSorter_directive.DefaultSorter;
exports.Paginator = paginator_component.Paginator;
exports.BootstrapPaginator = bootstrapPaginator_component.BootstrapPaginator;
exports.SemanticPaginator = semanticPaginator_component.SemanticPaginator;


exports.DataTableDirectives = [
    dataTable_directive.DataTable,
    defaultSorter_directive.DefaultSorter,
    paginator_component.Paginator,
    bootstrapPaginator_component.BootstrapPaginator,
    semanticPaginator_component.SemanticPaginator
];