declare module "@hyperapp/html" {
  import { Props, MaybeVNode, CustomPayloads, VNode } from "hyperapp"
  type VirtualContent<S> = MaybeVNode<S> | MaybeVNode<S>[]
  export function text<S>(t: string): VNode<S>

  export function a<S>(): VNode<S>
  export function a<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function a(first: VirtualContent<S>): VNode<S>
  export function a<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>

  export function b<S>(): VNode<S>
  export function b<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function b(first: VirtualContent<S>): VNode<S>
  export function b<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function i<S>(): VNode<S>
  export function i<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function i(first: VirtualContent<S>): VNode<S>
  export function i<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function p<S>(): VNode<S>
  export function p<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function p(first: VirtualContent<S>): VNode<S>
  export function p<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function q<S>(): VNode<S>
  export function q<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function q(first: VirtualContent<S>): VNode<S>
  export function q<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function s<S>(): VNode<S>
  export function s<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function s(first: VirtualContent<S>): VNode<S>
  export function s<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function br<S>(): VNode<S>
  export function br<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function br(first: VirtualContent<S>): VNode<S>
  export function br<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function dd<S>(): VNode<S>
  export function dd<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function dd(first: VirtualContent<S>): VNode<S>
  export function dd<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function dl<S>(): VNode<S>
  export function dl<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function dl(first: VirtualContent<S>): VNode<S>
  export function dl<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function dt<S>(): VNode<S>
  export function dt<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function dt(first: VirtualContent<S>): VNode<S>
  export function dt<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function em<S>(): VNode<S>
  export function em<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function em(first: VirtualContent<S>): VNode<S>
  export function em<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function h1<S>(): VNode<S>
  export function h1<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function h1(first: VirtualContent<S>): VNode<S>
  export function h1<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function h2<S>(): VNode<S>
  export function h2<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function h2(first: VirtualContent<S>): VNode<S>
  export function h2<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function h3<S>(): VNode<S>
  export function h3<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function h3(first: VirtualContent<S>): VNode<S>
  export function h3<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function h4<S>(): VNode<S>
  export function h4<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function h4(first: VirtualContent<S>): VNode<S>
  export function h4<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function h5<S>(): VNode<S>
  export function h5<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function h5(first: VirtualContent<S>): VNode<S>
  export function h5<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function h6<S>(): VNode<S>
  export function h6<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function h6(first: VirtualContent<S>): VNode<S>
  export function h6<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function hr<S>(): VNode<S>
  export function hr<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function hr(first: VirtualContent<S>): VNode<S>
  export function hr<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function li<S>(): VNode<S>
  export function li<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function li(first: VirtualContent<S>): VNode<S>
  export function li<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function ol<S>(): VNode<S>
  export function ol<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function ol(first: VirtualContent<S>): VNode<S>
  export function ol<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function rp<S>(): VNode<S>
  export function rp<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function rp(first: VirtualContent<S>): VNode<S>
  export function rp<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function rt<S>(): VNode<S>
  export function rt<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function rt(first: VirtualContent<S>): VNode<S>
  export function rt<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function td<S>(): VNode<S>
  export function td<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function td(first: VirtualContent<S>): VNode<S>
  export function td<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function th<S>(): VNode<S>
  export function th<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function th(first: VirtualContent<S>): VNode<S>
  export function th<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function tr<S>(): VNode<S>
  export function tr<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function tr(first: VirtualContent<S>): VNode<S>
  export function tr<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function ul<S>(): VNode<S>
  export function ul<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function ul(first: VirtualContent<S>): VNode<S>
  export function ul<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function bdi<S>(): VNode<S>
  export function bdi<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function bdi(first: VirtualContent<S>): VNode<S>
  export function bdi<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function bdo<S>(): VNode<S>
  export function bdo<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function bdo(first: VirtualContent<S>): VNode<S>
  export function bdo<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function col<S>(): VNode<S>
  export function col<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function col(first: VirtualContent<S>): VNode<S>
  export function col<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function del<S>(): VNode<S>
  export function del<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function del(first: VirtualContent<S>): VNode<S>
  export function del<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function dfn<S>(): VNode<S>
  export function dfn<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function dfn(first: VirtualContent<S>): VNode<S>
  export function dfn<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function div<S>(): VNode<S>
  export function div<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function div(first: VirtualContent<S>): VNode<S>
  export function div<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function img<S>(): VNode<S>
  export function img<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function img(first: VirtualContent<S>): VNode<S>
  export function img<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function ins<S>(): VNode<S>
  export function ins<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function ins(first: VirtualContent<S>): VNode<S>
  export function ins<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function kbd<S>(): VNode<S>
  export function kbd<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function kbd(first: VirtualContent<S>): VNode<S>
  export function kbd<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function map<S>(): VNode<S>
  export function map<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function map(first: VirtualContent<S>): VNode<S>
  export function map<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function nav<S>(): VNode<S>
  export function nav<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function nav(first: VirtualContent<S>): VNode<S>
  export function nav<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function pre<S>(): VNode<S>
  export function pre<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function pre(first: VirtualContent<S>): VNode<S>
  export function pre<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function rtc<S>(): VNode<S>
  export function rtc<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function rtc(first: VirtualContent<S>): VNode<S>
  export function rtc<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function sub<S>(): VNode<S>
  export function sub<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function sub(first: VirtualContent<S>): VNode<S>
  export function sub<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function sup<S>(): VNode<S>
  export function sup<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function sup(first: VirtualContent<S>): VNode<S>
  export function sup<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function wbr<S>(): VNode<S>
  export function wbr<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function wbr(first: VirtualContent<S>): VNode<S>
  export function wbr<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function abbr<S>(): VNode<S>
  export function abbr<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function abbr(first: VirtualContent<S>): VNode<S>
  export function abbr<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function area<S>(): VNode<S>
  export function area<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function area(first: VirtualContent<S>): VNode<S>
  export function area<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function cite<S>(): VNode<S>
  export function cite<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function cite(first: VirtualContent<S>): VNode<S>
  export function cite<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function code<S>(): VNode<S>
  export function code<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function code(first: VirtualContent<S>): VNode<S>
  export function code<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function data<S>(): VNode<S>
  export function data<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function data(first: VirtualContent<S>): VNode<S>
  export function data<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function form<S>(): VNode<S>
  export function form<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function form(first: VirtualContent<S>): VNode<S>
  export function form<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function main<S>(): VNode<S>
  export function main<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function main(first: VirtualContent<S>): VNode<S>
  export function main<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function mark<S>(): VNode<S>
  export function mark<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function mark(first: VirtualContent<S>): VNode<S>
  export function mark<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function ruby<S>(): VNode<S>
  export function ruby<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function ruby(first: VirtualContent<S>): VNode<S>
  export function ruby<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function samp<S>(): VNode<S>
  export function samp<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function samp(first: VirtualContent<S>): VNode<S>
  export function samp<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function span<S>(): VNode<S>
  export function span<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function span(first: VirtualContent<S>): VNode<S>
  export function span<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function time<S>(): VNode<S>
  export function time<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function time(first: VirtualContent<S>): VNode<S>
  export function time<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function aside<S>(): VNode<S>
  export function aside<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function aside(first: VirtualContent<S>): VNode<S>
  export function aside<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function audio<S>(): VNode<S>
  export function audio<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function audio(first: VirtualContent<S>): VNode<S>
  export function audio<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function input<S>(): VNode<S>
  export function input<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function input(first: VirtualContent<S>): VNode<S>
  export function input<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function label<S>(): VNode<S>
  export function label<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function label(first: VirtualContent<S>): VNode<S>
  export function label<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function meter<S>(): VNode<S>
  export function meter<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function meter(first: VirtualContent<S>): VNode<S>
  export function meter<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function param<S>(): VNode<S>
  export function param<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function param(first: VirtualContent<S>): VNode<S>
  export function param<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function small<S>(): VNode<S>
  export function small<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function small(first: VirtualContent<S>): VNode<S>
  export function small<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function table<S>(): VNode<S>
  export function table<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function table(first: VirtualContent<S>): VNode<S>
  export function table<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function tbody<S>(): VNode<S>
  export function tbody<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function tbody(first: VirtualContent<S>): VNode<S>
  export function tbody<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function tfoot<S>(): VNode<S>
  export function tfoot<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function tfoot(first: VirtualContent<S>): VNode<S>
  export function tfoot<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function thead<S>(): VNode<S>
  export function thead<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function thead(first: VirtualContent<S>): VNode<S>
  export function thead<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function track<S>(): VNode<S>
  export function track<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function track(first: VirtualContent<S>): VNode<S>
  export function track<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function video<S>(): VNode<S>
  export function video<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function video(first: VirtualContent<S>): VNode<S>
  export function video<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function button<S>(): VNode<S>
  export function button<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function button(first: VirtualContent<S>): VNode<S>
  export function button<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function canvas<S>(): VNode<S>
  export function canvas<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function canvas(first: VirtualContent<S>): VNode<S>
  export function canvas<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function dialog<S>(): VNode<S>
  export function dialog<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function dialog(first: VirtualContent<S>): VNode<S>
  export function dialog<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function figure<S>(): VNode<S>
  export function figure<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function figure(first: VirtualContent<S>): VNode<S>
  export function figure<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function footer<S>(): VNode<S>
  export function footer<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function footer(first: VirtualContent<S>): VNode<S>
  export function footer<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function header<S>(): VNode<S>
  export function header<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function header(first: VirtualContent<S>): VNode<S>
  export function header<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function iframe<S>(): VNode<S>
  export function iframe<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function iframe(first: VirtualContent<S>): VNode<S>
  export function iframe<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function legend<S>(): VNode<S>
  export function legend<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function legend(first: VirtualContent<S>): VNode<S>
  export function legend<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function object<S>(): VNode<S>
  export function object<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function object(first: VirtualContent<S>): VNode<S>
  export function object<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function option<S>(): VNode<S>
  export function option<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function option(first: VirtualContent<S>): VNode<S>
  export function option<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function output<S>(): VNode<S>
  export function output<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function output(first: VirtualContent<S>): VNode<S>
  export function output<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function select<S>(): VNode<S>
  export function select<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function select(first: VirtualContent<S>): VNode<S>
  export function select<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function source<S>(): VNode<S>
  export function source<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function source(first: VirtualContent<S>): VNode<S>
  export function source<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function strong<S>(): VNode<S>
  export function strong<S, X>(first: Props<S> & CustomPayloads<S, X>): VNode<S>
  export function strong(first: VirtualContent<S>): VNode<S>
  export function strong<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function address<S>(): VNode<S>
  export function address<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function address(first: VirtualContent<S>): VNode<S>
  export function address<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function article<S>(): VNode<S>
  export function article<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function article(first: VirtualContent<S>): VNode<S>
  export function article<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function caption<S>(): VNode<S>
  export function caption<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function caption(first: VirtualContent<S>): VNode<S>
  export function caption<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function details<S>(): VNode<S>
  export function details<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function details(first: VirtualContent<S>): VNode<S>
  export function details<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function section<S>(): VNode<S>
  export function section<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function section(first: VirtualContent<S>): VNode<S>
  export function section<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function summary<S>(): VNode<S>
  export function summary<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function summary(first: VirtualContent<S>): VNode<S>
  export function summary<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function picture<S>(): VNode<S>
  export function picture<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function picture(first: VirtualContent<S>): VNode<S>
  export function picture<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function colgroup<S>(): VNode<S>
  export function colgroup<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function colgroup(first: VirtualContent<S>): VNode<S>
  export function colgroup<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function datalist<S>(): VNode<S>
  export function datalist<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function datalist(first: VirtualContent<S>): VNode<S>
  export function datalist<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function fieldset<S>(): VNode<S>
  export function fieldset<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function fieldset(first: VirtualContent<S>): VNode<S>
  export function fieldset<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function menuitem<S>(): VNode<S>
  export function menuitem<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function menuitem(first: VirtualContent<S>): VNode<S>
  export function menuitem<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function optgroup<S>(): VNode<S>
  export function optgroup<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function optgroup(first: VirtualContent<S>): VNode<S>
  export function optgroup<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function progress<S>(): VNode<S>
  export function progress<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function progress(first: VirtualContent<S>): VNode<S>
  export function progress<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function textarea<S>(): VNode<S>
  export function textarea<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function textarea(first: VirtualContent<S>): VNode<S>
  export function textarea<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function blockquote<S>(): VNode<S>
  export function blockquote<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function blockquote(first: VirtualContent<S>): VNode<S>
  export function blockquote<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
  export function figcaption<S>(): VNode<S>
  export function figcaption<S, X>(
    first: Props<S> & CustomPayloads<S, X>
  ): VNode<S>
  export function figcaption(first: VirtualContent<S>): VNode<S>
  export function figcaption<S, X>(
    first: Props<S> & CustomPayloads<S, X>,
    second: VirtualContent<S>
  ): VNode<S>
}
