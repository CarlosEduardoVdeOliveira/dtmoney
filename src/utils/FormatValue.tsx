export function FormatNumberInReal(value:number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function FormatDate(date:string) {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date))
}
