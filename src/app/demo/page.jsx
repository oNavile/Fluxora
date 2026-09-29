"use client";

import materiaisIniciais from "@/materiais.json";
import { verificarSituacao } from "@/lib/estoque";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    Pie,
    PieChart,
} from "recharts";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function DemoPage() {

    const [materiais, setMateriais] = useState(materiaisIniciais);

    const [busca, setBusca] = useState("");
    const [categoria, setCategoria] = useState("Todas");
    const [situacao, setSituacao] = useState("Todas");

    const [dialogAberto, setDialogAberto] = useState(false);

    const [nomeNovo, setNomeNovo] = useState("");
    const [categoriaNova, setCategoriaNova] = useState("Metais");
    const [unidadeNova, setUnidadeNova] = useState("kg");
    const [quantidadeNova, setQuantidadeNova] = useState("");
    const [estoqueMinimoNovo, setEstoqueMinimoNovo] = useState("");

    const [dialogMovimentacaoAberto, setDialogMovimentacaoAberto] = useState(false);
    const [materialSelecionado, setMaterialSelecionado] = useState(null);
    const [tipoMovimentacao, setTipoMovimentacao] = useState("entrada");
    const [quantidadeMovimentacao, setQuantidadeMovimentacao] = useState("");

    const materiaisFiltrados = materiais.filter((material) => {
        const situacaoMaterial = verificarSituacao(material);

        const combinaBusca =
            material.nome.toLowerCase().includes(busca.toLowerCase()) ||
            material.codigo.toLowerCase().includes(busca.toLowerCase());

        const combinaCategoria =
            categoria === "Todas" || material.categoria === categoria;

        const combinaSituacao =
            situacao === "Todas" || situacaoMaterial === situacao;

        return combinaBusca && combinaCategoria && combinaSituacao;
    });

    const totalMateriais = materiais.length;

    const totalNormal = materiais.filter(
        (material) => verificarSituacao(material) === "Normal"
    ).length;

    const totalBaixo = materiais.filter(
        (material) => verificarSituacao(material) === "Estoque baixo"
    ).length;

    const totalSemEstoque = materiais.filter(
        (material) => verificarSituacao(material) === "Sem estoque"
    ).length;

    const dadosCategorias = [
        {
            categoria: "Metais",
            total: materiais.filter(
                (material) => material.categoria === "Metais"
            ).length,
        },
        {
            categoria: "Polímeros",
            total: materiais.filter(
                (material) => material.categoria === "Polímeros"
            ).length,
        },
        {
            categoria: "Madeiras",
            total: materiais.filter(
                (material) => material.categoria === "Madeiras"
            ).length,
        },
        {
            categoria: "Minerais",
            total: materiais.filter(
                (material) => material.categoria === "Minerais"
            ).length,
        },
    ];

    const dadosSituacao = [
        {
            situacao: "Normal",
            total: materiais.filter(
                (material) => verificarSituacao(material) === "Normal"
            ).length,
            fill: "var(--chart-2)",
        },
        {
            situacao: "Estoque baixo",
            total: materiais.filter(
                (material) => verificarSituacao(material) === "Estoque baixo"
            ).length,
            fill: "var(--primary)",
        },
        {
            situacao: "Sem estoque",
            total: materiais.filter(
                (material) => verificarSituacao(material) === "Sem estoque"
            ).length,
            fill: "var(--destructive)",
        },
    ];

    const chartConfig = {
        total: {
            label: "Materiais",
            color: "var(--primary)",
        },
    };

    const chartSituacaoConfig = {
        total: {
            label: "Materiais",
        },
        Normal: {
            label: "Normal",
            color: "var(--chart-2)",
        },
        "Estoque baixo": {
            label: "Estoque baixo",
            color: "var(--primary)",
        },
        "Sem estoque": {
            label: "Sem estoque",
            color: "var(--destructive)",
        },
    };

    function cadastrarMaterial() {
        if (
            nomeNovo === "" ||
            quantidadeNova === "" ||
            estoqueMinimoNovo === ""
        ) {
            alert("Preencha todos os campos.");
            return;
        }

        const novoMaterial = {
            id: Date.now(),
            codigo: `MP-${String(materiais.length + 1).padStart(3, "0")}`,
            nome: nomeNovo,
            categoria: categoriaNova,
            unidade: unidadeNova,
            quantidade: Number(quantidadeNova),
            estoqueMinimo: Number(estoqueMinimoNovo),
        };

        setMateriais([...materiais, novoMaterial]);

        setNomeNovo("");
        setCategoriaNova("Metais");
        setUnidadeNova("kg");
        setQuantidadeNova("");
        setEstoqueMinimoNovo("");

        setDialogAberto(false);
    }

    function movimentarEstoque() {
        const quantidade = Number(quantidadeMovimentacao);

        if (!quantidade || quantidade <= 0) {
            alert("Digite uma quantidade maior que zero.");
            return;
        }

        if (
            tipoMovimentacao === "saida" &&
            quantidade > materialSelecionado.quantidade
        ) {
            alert("A saída não pode ser maior que o saldo disponível.");
            return;
        }

        const materiaisAtualizados = materiais.map((material) => {
            if (material.id !== materialSelecionado.id) {
                return material;
            }

            if (tipoMovimentacao === "entrada") {
                return {
                    ...material,
                    quantidade: material.quantidade + quantidade,
                };
            }

            return {
                ...material,
                quantidade: material.quantidade - quantidade,
            };
        });

        setMateriais(materiaisAtualizados);

        setDialogMovimentacaoAberto(false);
        setMaterialSelecionado(null);
        setQuantidadeMovimentacao("");
    }

    function abrirMovimentacao(material, tipo) {
        setMaterialSelecionado(material);
        setTipoMovimentacao(tipo);
        setQuantidadeMovimentacao("");
        setDialogMovimentacaoAberto(true);
    }

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold">
                Fluxora
            </h1>

            <p className="text-gray-500 mt-2">
                Demonstração com dados fictícios
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 mt-8">

                <div className="rounded-xl border bg-card p-5 shadow-sm">
                    <p className="text-sm text-muted-foreground">
                        Total de materiais
                    </p>

                    <div className="mt-3 flex items-end justify-between">
                        <h2 className="text-3xl font-bold">
                            {totalMateriais}
                        </h2>

                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            Cadastrados
                        </span>
                    </div>
                </div>


                <div className="rounded-xl border bg-card p-5 shadow-sm">
                    <p className="text-sm text-muted-foreground">
                        Estoque normal
                    </p>

                    <div className="mt-3 flex items-end justify-between">
                        <h2 className="text-3xl font-bold">
                            {totalNormal}
                        </h2>

                        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
                            Normal
                        </span>
                    </div>
                </div>


                <div className="rounded-xl border bg-card p-5 shadow-sm">
                    <p className="text-sm text-muted-foreground">
                        Estoque baixo
                    </p>

                    <div className="mt-3 flex items-end justify-between">
                        <h2 className="text-3xl font-bold">
                            {totalBaixo}
                        </h2>

                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            Atenção
                        </span>
                    </div>
                </div>


                <div className="rounded-xl border bg-card p-5 shadow-sm">
                    <p className="text-sm text-muted-foreground">
                        Sem estoque
                    </p>

                    <div className="mt-3 flex items-end justify-between">
                        <h2 className="text-3xl font-bold">
                            {totalSemEstoque}
                        </h2>

                        <span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">
                            Crítico
                        </span>
                    </div>
                </div>

            </div>

            <div className="mt-8 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold">
                        Controle de materiais
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        Gerencie os materiais cadastrados no estoque.
                    </p>
                </div>

                <Dialog
                    open={dialogAberto}
                    onOpenChange={setDialogAberto}
                >
                    <DialogTrigger
                        render={
                            <Button>
                                + Cadastrar material
                            </Button>
                        }
                    />

                    <DialogContent className="sm:max-w-[520px]">
                        <DialogHeader>
                            <DialogTitle>Cadastrar material</DialogTitle>

                            <DialogDescription>
                                Adicione uma nova matéria-prima ao estoque da Fluxora.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid gap-5 py-4">

                            <div className="grid gap-2">
                                <label className="text-sm font-medium">
                                    Material
                                </label>

                                <Input
                                    placeholder="Ex: Borracha industrial"
                                    value={nomeNovo}
                                    onChange={(event) => setNomeNovo(event.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                <div className="grid gap-2">
                                    <label className="text-sm font-medium">
                                        Categoria
                                    </label>

                                    <Select
                                        value={categoriaNova}
                                        onValueChange={setCategoriaNova}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="Metais">
                                                Metais
                                            </SelectItem>

                                            <SelectItem value="Polímeros">
                                                Polímeros
                                            </SelectItem>

                                            <SelectItem value="Madeiras">
                                                Madeiras
                                            </SelectItem>

                                            <SelectItem value="Minerais">
                                                Minerais
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid gap-2">
                                    <label className="text-sm font-medium">
                                        Unidade
                                    </label>

                                    <Select
                                        value={unidadeNova}
                                        onValueChange={setUnidadeNova}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="kg">kg</SelectItem>
                                            <SelectItem value="g">g</SelectItem>
                                            <SelectItem value="L">L</SelectItem>
                                            <SelectItem value="m">m</SelectItem>
                                            <SelectItem value="m²">m²</SelectItem>
                                            <SelectItem value="m³">m³</SelectItem>
                                            <SelectItem value="chapa">chapa</SelectItem>
                                            <SelectItem value="unidade">unidade</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                <div className="grid gap-2">
                                    <label className="text-sm font-medium">
                                        Quantidade inicial
                                    </label>

                                    <Input
                                        type="number"
                                        min="0"
                                        placeholder="0"
                                        value={quantidadeNova}
                                        onChange={(event) =>
                                            setQuantidadeNova(event.target.value)
                                        }
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <label className="text-sm font-medium">
                                        Estoque mínimo
                                    </label>

                                    <Input
                                        type="number"
                                        min="0"
                                        placeholder="0"
                                        value={estoqueMinimoNovo}
                                        onChange={(event) =>
                                            setEstoqueMinimoNovo(event.target.value)
                                        }
                                    />
                                </div>

                            </div>

                        </div>

                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => setDialogAberto(false)}
                            >
                                Cancelar
                            </Button>

                            <Button onClick={cadastrarMaterial}>
                                Cadastrar
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="mt-6 rounded-xl border bg-card p-4 shadow-sm">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end">

                    <div className="flex-1">
                        <label className="mb-2 block text-sm font-medium">
                            Buscar material
                        </label>

                        <input
                            type="text"
                            placeholder="Digite o nome ou código..."
                            value={busca}
                            onChange={(event) => setBusca(event.target.value)}
                            className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Categoria
                        </label>

                        <select
                            value={categoria}
                            onChange={(event) => setCategoria(event.target.value)}
                            className="w-full min-w-44 rounded-md border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                        >
                            <option value="Todas">Todas</option>
                            <option value="Metais">Metais</option>
                            <option value="Polímeros">Polímeros</option>
                            <option value="Madeiras">Madeiras</option>
                            <option value="Minerais">Minerais</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Situação
                        </label>

                        <select
                            value={situacao}
                            onChange={(event) => setSituacao(event.target.value)}
                            className="w-full min-w-44 rounded-md border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
                        >
                            <option value="Todas">Todas</option>
                            <option value="Normal">Normal</option>
                            <option value="Estoque baixo">Estoque baixo</option>
                            <option value="Sem estoque">Sem estoque</option>
                        </select>
                    </div>

                    <button
                        onClick={() => {
                            setBusca("");
                            setCategoria("Todas");
                            setSituacao("Todas");
                        }}
                        className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                    >
                        Limpar filtros
                    </button>

                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                    {materiaisFiltrados.length} material(is) encontrado(s)
                </p>

            </div>

            {materiaisFiltrados.length === 0 && (
                <p className="mt-6 text-gray-500">
                    Nenhum material encontrado.
                </p>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

                <section>
                    <div className="mb-5">
                        <p className="text-sm font-medium text-primary">
                            Visão geral
                        </p>

                        <h2 className="mt-1 text-2xl font-semibold">
                            Materiais por categoria
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Distribuição dos materiais cadastrados no sistema.
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
                        <ChartContainer
                            config={chartConfig}
                            className="h-[300px] w-full"
                        >
                            <BarChart data={dadosCategorias}>
                                <CartesianGrid
                                    vertical={false}
                                    strokeDasharray="3 3"
                                />

                                <XAxis
                                    dataKey="categoria"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={10}
                                />

                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent />}
                                />

                                <Bar
                                    dataKey="total"
                                    fill="var(--color-total)"
                                    radius={[8, 8, 0, 0]}
                                />
                            </BarChart>
                        </ChartContainer>
                    </div>
                </section>


                <section>
                    <div className="mb-5">
                        <p className="text-sm font-medium text-primary">
                            Situação atual
                        </p>

                        <h2 className="mt-1 text-2xl font-semibold">
                            Distribuição do estoque
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Quantidade de materiais em cada situação de estoque.
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
                        <ChartContainer
                            config={chartSituacaoConfig}
                            className="mx-auto h-[300px] w-full"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent />}
                                />

                                <Pie
                                    data={dadosSituacao}
                                    dataKey="total"
                                    nameKey="situacao"
                                    innerRadius={60}
                                    outerRadius={100}
                                    strokeWidth={4}
                                />
                            </PieChart>
                        </ChartContainer>
                    </div>
                </section>

            </div>

            <div className="mt-10 mb-4 flex items-end justify-between">
                <div>
                    <h2 className="text-2xl font-semibold">
                        Materiais
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        Consulte e gerencie os materiais cadastrados.
                    </p>
                </div>

                <p className="text-sm text-muted-foreground">
                    {materiaisFiltrados.length} de {materiais.length} materiais
                </p>
            </div>

            <div className="mt-8 rounded-xl border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Código</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Categoria</TableHead>
                            <TableHead>Unidade</TableHead>
                            <TableHead>Quantidade</TableHead>
                            <TableHead>Estoque mínimo</TableHead>
                            <TableHead>Situação</TableHead>
                            <TableHead>Ações</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {materiaisFiltrados.map((material) => {
                            const situacaoMaterial = verificarSituacao(material);

                            return (
                                <TableRow key={material.id}>
                                    <TableCell className="font-medium">
                                        {material.codigo}
                                    </TableCell>

                                    <TableCell>
                                        {material.nome}
                                    </TableCell>

                                    <TableCell className="text-muted-foreground">
                                        {material.categoria}
                                    </TableCell>

                                    <TableCell className="text-muted-foreground">
                                        {material.unidade}
                                    </TableCell>

                                    <TableCell>
                                        {material.quantidade}
                                    </TableCell>

                                    <TableCell>
                                        {material.estoqueMinimo}
                                    </TableCell>

                                    <TableCell>
                                        {situacaoMaterial === "Normal" && (
                                            <Badge className="bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/15">
                                                Normal
                                            </Badge>
                                        )}

                                        {situacaoMaterial === "Estoque baixo" && (
                                            <Badge className="bg-primary/15 text-primary hover:bg-primary/15">
                                                Estoque baixo
                                            </Badge>
                                        )}

                                        {situacaoMaterial === "Sem estoque" && (
                                            <Badge variant="destructive">
                                                Sem estoque
                                            </Badge>
                                        )}
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() =>
                                                    abrirMovimentacao(material, "entrada")
                                                }
                                            >
                                                Entrada
                                            </Button>

                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() =>
                                                    abrirMovimentacao(material, "saida")
                                                }
                                            >
                                                Saída
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

                {materiaisFiltrados.length === 0 && (
                    <div className="p-8 text-center text-sm text-muted-foreground">
                        Nenhum material encontrado.
                    </div>
                )}
            </div>

            <Dialog
                open={dialogMovimentacaoAberto}
                onOpenChange={setDialogMovimentacaoAberto}
            >
                <DialogContent className="sm:max-w-[480px]">
                    <DialogHeader>
                        <DialogTitle>
                            Registrar movimentação
                        </DialogTitle>

                        <DialogDescription>
                            Registre uma entrada ou saída de estoque.
                        </DialogDescription>
                    </DialogHeader>

                    {materialSelecionado && (
                        <div className="grid gap-5 py-4">

                            <div className="rounded-lg border bg-muted/30 p-4">
                                <p className="text-sm text-muted-foreground">
                                    Material
                                </p>

                                <p className="mt-1 font-medium">
                                    {materialSelecionado.nome}
                                </p>

                                <div className="mt-3 flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        Saldo atual
                                    </span>

                                    <span className="font-semibold">
                                        {materialSelecionado.quantidade}{" "}
                                        {materialSelecionado.unidade}
                                    </span>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium">
                                    Tipo de movimentação
                                </label>

                                <Select
                                    value={tipoMovimentacao}
                                    onValueChange={setTipoMovimentacao}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="entrada">
                                            Entrada
                                        </SelectItem>

                                        <SelectItem value="saida">
                                            Saída
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid gap-2">
                                <label className="text-sm font-medium">
                                    Quantidade
                                </label>

                                <Input
                                    type="number"
                                    min="1"
                                    placeholder="Ex: 50"
                                    value={quantidadeMovimentacao}
                                    onChange={(event) =>
                                        setQuantidadeMovimentacao(event.target.value)
                                    }
                                />

                                {tipoMovimentacao === "saida" && (
                                    <p className="text-xs text-muted-foreground">
                                        Máximo disponível:{" "}
                                        {materialSelecionado.quantidade}{" "}
                                        {materialSelecionado.unidade}
                                    </p>
                                )}
                            </div>

                        </div>
                    )}

                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setDialogMovimentacaoAberto(false)}
                        >
                            Cancelar
                        </Button>

                        <Button onClick={movimentarEstoque}>
                            Confirmar
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </main>
    );
}