---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford
title: Microsoft.Quantum.Intrinsic.AsRCczTClifford namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.summary: ''
---

# Microsoft.Quantum.Intrinsic.AsRCczTClifford namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApplyGlobalPhase](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ApplyGlobalPhase) |
|[ApplyGlobalPhaseFrac](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ApplyGlobalPhaseFrac) |
|[ApplyPhaseOp](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ApplyPhaseOp) |
|[ApplyUsingSinglyControlledVersion](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ApplyUsingSinglyControlledVersion) |
|[ApplyWithLessControlsA](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ApplyWithLessControlsA) |
|[ApplyWithOneLessControlA](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ApplyWithOneLessControlA) |
|[CCNOT](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CCNOT) |Unchanged
|[CCXAssertingTargetIsZero](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CCXAssertingTargetIsZero) |
|[CH](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CH) |
|[CHTest](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CHTest) |
|[CNOT](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CNOT) |Unchanged
|[CRz](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CRz) |
|[CRzFrac](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CRzFrac) |
|[CRzFrac11](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CRzFrac11) |
|[CRzFrac12](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CRzFrac12) |
|[CRzFrac32](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CRzFrac32) |
|[CRzTest](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CRzTest) |
|[CS](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CS) |
|[CSTest](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CSTest) |
|[CSWAP](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CSWAP) |
|[CXYZTest](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.CXYZTest) |
|[ControlledPhaseOp](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ControlledPhaseOp) |
|[Exp](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.Exp) |Applies the exponential of a multi-qubit Pauli operator.
\begin{align} e^{i \theta [P_0 \otimes P_1 \cdots P_{N-1}]}, \end{align} where $P_i$ is the $i$th element of `paulis`, and where $N = $`Length(paulis)`.
|[ExpFrac](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ExpFrac) |Applies the exponential of a multi-qubit Pauli operator with an argument given by a dyadic fraction.
\begin{align} e^{i \pi k [P_0 \otimes P_1 \cdots P_{N-1}] / 2^n}, \end{align} where $P_i$ is the $i$th element of `paulis`, and where $N = $`Length(paulis)`.
|[ExpNoId](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ExpNoId) |
|[ExpNoIdFrac](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ExpNoIdFrac) |
|[ExpZ](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ExpZ) |
|[ExpZFrac](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ExpZFrac) |
|[H](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.H) |Applies the Hadamard transformation to a single qubit.
\begin{align} H \mathrel{:=} \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\\\ 1 & -1 \end{bmatrix}. \end{align}
|[I](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.I) |Unchanged
|[M](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.M) |Unchanged
|[Measure](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.Measure) |Unchanged
|[R](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.R) |Applies a rotation about the given Pauli axis.
\begin{align} R_{\mu}(\theta) \mathrel{:=} e^{-i \theta \sigma_{\mu} / 2}, \end{align} where $\mu \in \{I, X, Y, Z\}$.
|[R1](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.R1) |Applies a rotation about the $\ket{1}$ state by a given angle.
\begin{align} R_1(\theta) \mathrel{:=} \operatorname{diag}(1, e^{i\theta}). \end{align}
|[R1Frac](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.R1Frac) |Applies a rotation about the $\ket{1}$ state by an angle specified as a dyadic fraction.
\begin{align} R_1(n, k) \mathrel{:=} \operatorname{diag}(1, e^{i \pi k / 2^n}). \end{align}
> [!WARNING] > This operation uses the **opposite** sign convention from > @"microsoft.quantum.intrinsic.r", and does not include the > factor of $1/2$ included by @"microsoft.quantum.intrinsic.r1".
|[RFrac](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.RFrac) |Applies a rotation about the given Pauli axis by an angle specified as a dyadic7 fraction.
\begin{align} R_{\mu}(n, k) \mathrel{:=} e^{i \pi n \sigma_{\mu} / 2^k}, \end{align} where $\mu \in \{I, X, Y, Z\}$.
> [!WARNING] > This operation uses the **opposite** sign convention from > @"microsoft.quantum.intrinsic.r".
|[Reset](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.Reset) |Unchanged
|[ResetAll](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.ResetAll) |Unchanged
|[Rx](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.Rx) |Unchanged
|[Ry](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.Ry) |Unchanged
|[Rz](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.Rz) |Unchanged
|[RzFrac](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.RzFrac) |
|[S](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.S) |Applies the π/4 phase gate to a single qubit.
\begin{align} S \mathrel{:=} \begin{bmatrix} 1 & 0 \\\\ 0 & i \end{bmatrix}. \end{align}
|[SWAP](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.SWAP) |Applies the SWAP gate to a pair of qubits.
\begin{align} \operatorname{SWAP} \mathrel{:=} \begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \end{bmatrix}, \end{align}
where rows and columns are ordered as in the quantum concepts guide.
|[T](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.T) |Applies the π/8 gate to a single qubit.
\begin{align} T \mathrel{:=} \begin{bmatrix} 1 & 0 \\\\ 0 & e^{i \pi / 4} \end{bmatrix}. \end{align}
|[UnitaryIntrinsicTest](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.UnitaryIntrinsicTest) |
|[X](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.X) |Applies the Pauli $X$ gate.
\begin{align} \sigma_x \mathrel{:=} \begin{bmatrix} 0 & 1 \\\\ 1 & 0 \end{bmatrix}. \end{align}
|[Y](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.Y) |Applies the Pauli $Y$ gate.
\begin{align} \sigma_y \mathrel{:=} \begin{bmatrix} 0 & -i \\\\ i & 0 \end{bmatrix}. \end{align}
|[Z](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.Z) |Applies the Pauli $Z$ gate.
\begin{align} \sigma_z \mathrel{:=} \begin{bmatrix} 1 & 0 \\\\ 0 & -1 \end{bmatrix}. \end{align}

## Functions

| Name | Summary |
|------|---------|
|[EnableAsserts](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.EnableAsserts) |
|[False](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.False) |
|[RCczTCliffordIntrinsics](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.RCczTCliffordIntrinsics) |
|[True](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford.True) |

<!-- /summaries -->
