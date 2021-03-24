---
uid: Microsoft.Quantum.Canon
title: Microsoft.Quantum.Canon namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Canon
qsharp.summary: ''
---

# Microsoft.Quantum.Canon namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[AndLadder](xref:Microsoft.Quantum.Canon.AndLadder) |Performs a controlled "AND ladder" on a register of target qubits.
|[ApplyAnd](xref:Microsoft.Quantum.Canon.ApplyAnd) |Inverts a given target qubit if and only if both control qubits are in the 1 state, using measurement to perform the adjoint operation.
|[ApplyCCNOTChain](xref:Microsoft.Quantum.Canon.ApplyCCNOTChain) |Implements a cascade of CCNOT gates controlled on corresponding bits of two qubit registers, acting on the next qubit of one of the registers. Starting from the qubits at position 0 in both registers as controls, CCNOT is applied to the qubit at position 1 of the target register, then controlled by the qubits at position 1 acting on the qubit at position 2 in the target register, etc., ending with an action on the target qubit in position `Length(nQubits)-1`.
|[ApplyCNOTChain](xref:Microsoft.Quantum.Canon.ApplyCNOTChain) |Computes the parity of a register of qubits in-place.
|[ApplyCNOTChainWithTarget](xref:Microsoft.Quantum.Canon.ApplyCNOTChainWithTarget) |Computes the parity of an array of qubits into a target qubit.
|[ApplyControlledOnBitString](xref:Microsoft.Quantum.Canon.ApplyControlledOnBitString) |Applies a unitary operation on the target register, controlled on a a state specified by a given bit mask.
|[ApplyControlledOnInt](xref:Microsoft.Quantum.Canon.ApplyControlledOnInt) |Applies a unitary operation on the target register if the control register state corresponds to a specified positive integer.
|[ApplyDiagonalUnitary](xref:Microsoft.Quantum.Canon.ApplyDiagonalUnitary) |Applies an array of complex phases to numeric basis states of a register of qubits.
|[ApplyFermionicSWAP](xref:Microsoft.Quantum.Canon.ApplyFermionicSWAP) |Applies the Fermionic SWAP.
|[ApplyIf](xref:Microsoft.Quantum.Canon.ApplyIf) |Applies an operation conditioned on a classical bit.
|[ApplyIfA](xref:Microsoft.Quantum.Canon.ApplyIfA) |Applies a adjointable operation conditioned on a classical bit.
|[ApplyIfC](xref:Microsoft.Quantum.Canon.ApplyIfC) |Applies a controllable operation conditioned on a classical bit.
|[ApplyIfCA](xref:Microsoft.Quantum.Canon.ApplyIfCA) |Applies a unitary operation conditioned on a classical bit.
|[ApplyIfElseB](xref:Microsoft.Quantum.Canon.ApplyIfElseB) |Applies one of two operations, depending on the value of a classical bit.
|[ApplyIfElseBA](xref:Microsoft.Quantum.Canon.ApplyIfElseBA) |Applies one of two adjointable operations, depending on the value of a classical bit.
|[ApplyIfElseBC](xref:Microsoft.Quantum.Canon.ApplyIfElseBC) |Applies one of two controllable operations, depending on the value of a classical bit.
|[ApplyIfElseBCA](xref:Microsoft.Quantum.Canon.ApplyIfElseBCA) |Applies one of two unitary operations, depending on the value of a classical bit.
|[ApplyIfElseR](xref:Microsoft.Quantum.Canon.ApplyIfElseR) |Applies one of two operations, depending on the value of a classical result.
|[ApplyIfElseRA](xref:Microsoft.Quantum.Canon.ApplyIfElseRA) |Applies one of two adjointable operations, depending on the value of a classical result.
|[ApplyIfElseRC](xref:Microsoft.Quantum.Canon.ApplyIfElseRC) |Applies one of two controllable operations, depending on the value of a classical result.
|[ApplyIfElseRCA](xref:Microsoft.Quantum.Canon.ApplyIfElseRCA) |Applies one of two unitary operations, depending on the value of a classical result.
|[ApplyIfOne](xref:Microsoft.Quantum.Canon.ApplyIfOne) |Applies an operation conditioned on a classical result value being one.
|[ApplyIfOneA](xref:Microsoft.Quantum.Canon.ApplyIfOneA) |Applies an adjointable operation conditioned on a classical result value being one.
|[ApplyIfOneC](xref:Microsoft.Quantum.Canon.ApplyIfOneC) |Applies a controllable operation conditioned on a classical result value being one.
|[ApplyIfOneCA](xref:Microsoft.Quantum.Canon.ApplyIfOneCA) |Applies a unitary operation conditioned on a classical result value being one.
|[ApplyIfZero](xref:Microsoft.Quantum.Canon.ApplyIfZero) |Applies an operation conditioned on a classical result value being zero.
|[ApplyIfZeroA](xref:Microsoft.Quantum.Canon.ApplyIfZeroA) |Applies an adjointable operation conditioned on a classical result value being zero.
|[ApplyIfZeroC](xref:Microsoft.Quantum.Canon.ApplyIfZeroC) |Applies a controllable operation conditioned on a classical result value being zero.
|[ApplyIfZeroCA](xref:Microsoft.Quantum.Canon.ApplyIfZeroCA) |Applies a unitary operation conditioned on a classical result value being zero.
|[ApplyLowDepthAnd](xref:Microsoft.Quantum.Canon.ApplyLowDepthAnd) |Inverts a given target qubit if and only if both control qubits are in the 1 state, with T-depth 1, using measurement to perform the adjoint operation.
|[ApplyMultiControlledC](xref:Microsoft.Quantum.Canon.ApplyMultiControlledC) |Applies a multiply controlled version of a singly controlled operation. The modifier `C` indicates that the single-qubit operation is controllable.
|[ApplyMultiControlledCA](xref:Microsoft.Quantum.Canon.ApplyMultiControlledCA) |Applies a multiply controlled version of a singly controlled operation. The modifier `CA` indicates that the single-qubit operation is controllable and adjointable.
|[ApplyOpRepeatedlyOver](xref:Microsoft.Quantum.Canon.ApplyOpRepeatedlyOver) |Applies the same op over a qubit register multiple times.
|[ApplyOpRepeatedlyOverA](xref:Microsoft.Quantum.Canon.ApplyOpRepeatedlyOverA) |Applies the same op over a qubit register multiple times.
|[ApplyOpRepeatedlyOverC](xref:Microsoft.Quantum.Canon.ApplyOpRepeatedlyOverC) |Applies the same op over a qubit register multiple times.
|[ApplyOpRepeatedlyOverCA](xref:Microsoft.Quantum.Canon.ApplyOpRepeatedlyOverCA) |Applies the same op over a qubit register multiple times.
|[ApplyP](xref:Microsoft.Quantum.Canon.ApplyP) |Given a single-qubit Pauli operator, applies the corresponding operation to a single qubit.
|[ApplyPauli](xref:Microsoft.Quantum.Canon.ApplyPauli) |Given a multi-qubit Pauli operator, applies the corresponding operation to a register.
|[ApplyPauliFromBitString](xref:Microsoft.Quantum.Canon.ApplyPauliFromBitString) |Applies a Pauli operator on each qubit in an array if the corresponding bit of a Boolean array matches a given input.
|[ApplyQuantumFourierTransform](xref:Microsoft.Quantum.Canon.ApplyQuantumFourierTransform) |Performs the Quantum Fourier Transform on a quantum register containing an integer in the little-endian representation.
|[ApplyReversedOpBigEndianA](xref:Microsoft.Quantum.Canon.ApplyReversedOpBigEndianA) |> [!WARNING]
> ApplyReversedOpBigEndianA has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpBEA> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.ApplyReversedOpBEA".


|[ApplyReversedOpBigEndianC](xref:Microsoft.Quantum.Canon.ApplyReversedOpBigEndianC) |> [!WARNING]
> ApplyReversedOpBigEndianC has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpBEC> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.ApplyReversedOpBEC".


|[ApplyReversedOpBigEndianCA](xref:Microsoft.Quantum.Canon.ApplyReversedOpBigEndianCA) |> [!WARNING]
> ApplyReversedOpBigEndianCA has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpBECA> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.ApplyReversedOpBEC".


|[ApplyReversedOpLittleEndianA](xref:Microsoft.Quantum.Canon.ApplyReversedOpLittleEndianA) |> [!WARNING]
> ApplyReversedOpLittleEndianA has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpLEA> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.ApplyReversedOpLEA".


|[ApplyReversedOpLittleEndianC](xref:Microsoft.Quantum.Canon.ApplyReversedOpLittleEndianC) |> [!WARNING]
> ApplyReversedOpLittleEndianC has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpLEC> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.ApplyReversedOpLEC".


|[ApplyReversedOpLittleEndianCA](xref:Microsoft.Quantum.Canon.ApplyReversedOpLittleEndianCA) |> [!WARNING]
> ApplyReversedOpLittleEndianCA has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpLECA> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.ApplyReversedOpLEC".


|[ApplyRippleCarryComparatorLE](xref:Microsoft.Quantum.Canon.ApplyRippleCarryComparatorLE) |> [!WARNING]
> ApplyRippleCarryComparatorLE has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.CompareUsingRippleCarry> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.CompareUsingRippleCarry".


|[ApplySeriesOfOps](xref:Microsoft.Quantum.Canon.ApplySeriesOfOps) |Applies a list of ops and their targets sequentially on an array.
|[ApplySeriesOfOpsA](xref:Microsoft.Quantum.Canon.ApplySeriesOfOpsA) |Applies a list of ops and their targets sequentially on an array. (Adjoint)
|[ApplySeriesOfOpsC](xref:Microsoft.Quantum.Canon.ApplySeriesOfOpsC) |Applies a list of ops and their targets sequentially on an array. (Controlled)
|[ApplySeriesOfOpsCA](xref:Microsoft.Quantum.Canon.ApplySeriesOfOpsCA) |Applies a list of ops and their targets sequentially on an array. (Adjoint + Controlled)
|[ApplyToEach](xref:Microsoft.Quantum.Canon.ApplyToEach) |Applies a single-qubit operation to each element in a register.
|[ApplyToEachA](xref:Microsoft.Quantum.Canon.ApplyToEachA) |Applies a single-qubit operation to each element in a register. The modifier `A` indicates that the single-qubit operation is adjointable.
|[ApplyToEachC](xref:Microsoft.Quantum.Canon.ApplyToEachC) |Applies a single-qubit operation to each element in a register. The modifier `C` indicates that the single-qubit operation is controllable.
|[ApplyToEachCA](xref:Microsoft.Quantum.Canon.ApplyToEachCA) |Applies a single-qubit operation to each element in a register. The modifier `CA` indicates that the single-qubit operation is controllable and adjointable.
|[ApplyToEachIndex](xref:Microsoft.Quantum.Canon.ApplyToEachIndex) |Applies a single-qubit operation to each indexed element in a register.
|[ApplyToEachIndexA](xref:Microsoft.Quantum.Canon.ApplyToEachIndexA) |Applies a single-qubit operation to each indexed element in a register. The modifier `A` indicates that the single-qubit operation is adjointable.
|[ApplyToEachIndexC](xref:Microsoft.Quantum.Canon.ApplyToEachIndexC) |Applies a single-qubit operation to each indexed element in a register. The modifier `C` indicates that the single-qubit operation is controllable.
|[ApplyToEachIndexCA](xref:Microsoft.Quantum.Canon.ApplyToEachIndexCA) |Applies a single-qubit operation to each indexed element in a register. The modifier `CA` indicates that the single-qubit operation is adjointable and controllable.
|[ApplyToElement](xref:Microsoft.Quantum.Canon.ApplyToElement) |Applies an operation to a given element of an array.
|[ApplyToElementA](xref:Microsoft.Quantum.Canon.ApplyToElementA) |Applies an operation to a given element of an array.
|[ApplyToElementC](xref:Microsoft.Quantum.Canon.ApplyToElementC) |Applies an operation to a given element of an array.
|[ApplyToElementCA](xref:Microsoft.Quantum.Canon.ApplyToElementCA) |Applies an operation to a given element of an array.
|[ApplyToFirstQubit](xref:Microsoft.Quantum.Canon.ApplyToFirstQubit) |Applies an operation to the first qubit in the register.
|[ApplyToFirstQubitA](xref:Microsoft.Quantum.Canon.ApplyToFirstQubitA) |Applies an operation to the first qubit in the register. The modifier `A` indicates that the operation is adjointable.
|[ApplyToFirstQubitC](xref:Microsoft.Quantum.Canon.ApplyToFirstQubitC) |Applies operation op to the first qubit in the register. The modifier `C` indicates that the operation is controllable.
|[ApplyToFirstQubitCA](xref:Microsoft.Quantum.Canon.ApplyToFirstQubitCA) |Applies operation op to the first qubit in the register. The modifier `CA` indicates that the operation is controllable and adjointable.
|[ApplyToFirstThreeQubits](xref:Microsoft.Quantum.Canon.ApplyToFirstThreeQubits) |Applies an operation to the first three qubits in the register.
|[ApplyToFirstThreeQubitsA](xref:Microsoft.Quantum.Canon.ApplyToFirstThreeQubitsA) |Applies an operation to the first three qubits in the register. The modifier `A` indicates that the operation is adjointable.
|[ApplyToFirstThreeQubitsC](xref:Microsoft.Quantum.Canon.ApplyToFirstThreeQubitsC) |Applies an operation to the first three qubits in the register. The modifier `C` indicates that the operation is controllable.
|[ApplyToFirstThreeQubitsCA](xref:Microsoft.Quantum.Canon.ApplyToFirstThreeQubitsCA) |Applies an operation to the first three qubits in the register. The modifier `CA` indicates that the operation is controllable and adjointable.
|[ApplyToFirstTwoQubits](xref:Microsoft.Quantum.Canon.ApplyToFirstTwoQubits) |Applies an operation to the first two qubits in the register.
|[ApplyToFirstTwoQubitsA](xref:Microsoft.Quantum.Canon.ApplyToFirstTwoQubitsA) |Applies an operation to the first two qubits in the register. The modifier `A` indicates that the operation is adjointable.
|[ApplyToFirstTwoQubitsC](xref:Microsoft.Quantum.Canon.ApplyToFirstTwoQubitsC) |Applies an operation to the first two qubits in the register. The modifier `C` indicates that the operation is controllable.
|[ApplyToFirstTwoQubitsCA](xref:Microsoft.Quantum.Canon.ApplyToFirstTwoQubitsCA) |Applies an operation to the first two qubits in the register. The modifier `CA` indicates that the operation is controllable and adjointable.
|[ApplyToHead](xref:Microsoft.Quantum.Canon.ApplyToHead) |Applies an operation to the first element of an array.
|[ApplyToHeadA](xref:Microsoft.Quantum.Canon.ApplyToHeadA) |Applies an operation to the first element of an array.
|[ApplyToHeadC](xref:Microsoft.Quantum.Canon.ApplyToHeadC) |Applies an operation to the first element of an array.
|[ApplyToHeadCA](xref:Microsoft.Quantum.Canon.ApplyToHeadCA) |Applies an operation to the first element of an array.
|[ApplyToMost](xref:Microsoft.Quantum.Canon.ApplyToMost) |Applies an operation to all but the last element of an array.
|[ApplyToMostA](xref:Microsoft.Quantum.Canon.ApplyToMostA) |Applies an operation to all but the last element of an array.
|[ApplyToMostC](xref:Microsoft.Quantum.Canon.ApplyToMostC) |Applies an operation to all but the last element of an array.
|[ApplyToMostCA](xref:Microsoft.Quantum.Canon.ApplyToMostCA) |Applies an operation to all but the last element of an array.
|[ApplyToPartition](xref:Microsoft.Quantum.Canon.ApplyToPartition) |Applies a pair of operations to a given partition of a register into two parts.
|[ApplyToPartitionA](xref:Microsoft.Quantum.Canon.ApplyToPartitionA) |Applies a pair of operations to a given partition of a register into two parts. The modifier `A` indicates that the operation is adjointable.
|[ApplyToPartitionC](xref:Microsoft.Quantum.Canon.ApplyToPartitionC) |Applies a pair of operations to a given partition of a register into two parts. The modifier `C` indicates that the operation is controllable.
|[ApplyToPartitionCA](xref:Microsoft.Quantum.Canon.ApplyToPartitionCA) |Applies a pair of operations to a given partition of a register into two parts. The modifier `CA` indicates that the operation is controllable and adjointable.
|[ApplyToRest](xref:Microsoft.Quantum.Canon.ApplyToRest) |Applies an operation to all but the first element of an array.
|[ApplyToRestA](xref:Microsoft.Quantum.Canon.ApplyToRestA) |Applies an operation to all but the first element of an array.
|[ApplyToRestC](xref:Microsoft.Quantum.Canon.ApplyToRestC) |Applies an operation to all but the first element of an array.
|[ApplyToRestCA](xref:Microsoft.Quantum.Canon.ApplyToRestCA) |Applies an operation to all but the first element of an array.
|[ApplyToSubregister](xref:Microsoft.Quantum.Canon.ApplyToSubregister) |Applies an operation to a subregister of a register, with qubits specified by an array of their indices.
|[ApplyToSubregisterA](xref:Microsoft.Quantum.Canon.ApplyToSubregisterA) |Applies an operation to a subregister of a register, with qubits specified by an array of their indices. The modifier `A` indicates that the operation is adjointable.
|[ApplyToSubregisterC](xref:Microsoft.Quantum.Canon.ApplyToSubregisterC) |Applies an operation to a subregister of a register, with qubits specified by an array of their indices. The modifier `C` indicates that the operation is controllable.
|[ApplyToSubregisterCA](xref:Microsoft.Quantum.Canon.ApplyToSubregisterCA) |Applies an operation to a subregister of a register, with qubits specified by an array of their indices. The modifier `CA` indicates that the operation is controllable and adjointable.
|[ApplyToTail](xref:Microsoft.Quantum.Canon.ApplyToTail) |Applies an operation to the last element of an array.
|[ApplyToTailA](xref:Microsoft.Quantum.Canon.ApplyToTailA) |Applies an operation to the last element of an array.
|[ApplyToTailC](xref:Microsoft.Quantum.Canon.ApplyToTailC) |Applies an operation to the last element of an array.
|[ApplyToTailCA](xref:Microsoft.Quantum.Canon.ApplyToTailCA) |Applies an operation to the last element of an array.
|[ApplyWith](xref:Microsoft.Quantum.Canon.ApplyWith) |Given two operations, applies one as conjugated with the other.
|[ApplyWithA](xref:Microsoft.Quantum.Canon.ApplyWithA) |Given two operations, applies one as conjugated with the other.
|[ApplyWithC](xref:Microsoft.Quantum.Canon.ApplyWithC) |Given two operations, applies one as conjugated with the other.
|[ApplyWithCA](xref:Microsoft.Quantum.Canon.ApplyWithCA) |Given two operations, applies one as conjugated with the other.
|[ApplyWithInputTransformation](xref:Microsoft.Quantum.Canon.ApplyWithInputTransformation) |Given an operation that accepts some input, a function that returns an output compatible with that operation, and an input to that function, applies the operation using the function to transform the input to a form expected by the operation.
|[ApplyWithInputTransformationA](xref:Microsoft.Quantum.Canon.ApplyWithInputTransformationA) |Given an operation that accepts some input, a function that returns an output compatible with that operation, and an input to that function, applies the operation using the function to transform the input to a form expected by the operation.
|[ApplyWithInputTransformationC](xref:Microsoft.Quantum.Canon.ApplyWithInputTransformationC) |Given an operation that accepts some input, a function that returns an output compatible with that operation, and an input to that function, applies the operation using the function to transform the input to a form expected by the operation.
|[ApplyWithInputTransformationCA](xref:Microsoft.Quantum.Canon.ApplyWithInputTransformationCA) |Given an operation that accepts some input, a function that returns an output compatible with that operation, and an input to that function, applies the operation using the function to transform the input to a form expected by the operation.
|[ApproximateQFT](xref:Microsoft.Quantum.Canon.ApproximateQFT) |Apply the Approximate Quantum Fourier Transform (AQFT) to a quantum register.
|[ApproximatelyApplyDiagonalUnitary](xref:Microsoft.Quantum.Canon.ApproximatelyApplyDiagonalUnitary) |Applies an array of complex phases to numeric basis states of a register of qubits, truncating small rotation angles according to a given tolerance.
|[ApproximatelyMultiplexPauli](xref:Microsoft.Quantum.Canon.ApproximatelyMultiplexPauli) |Applies a Pauli rotation conditioned on an array of qubits, truncating small rotation angles according to a given tolerance.
|[ApproximatelyMultiplexZ](xref:Microsoft.Quantum.Canon.ApproximatelyMultiplexZ) |Applies a Pauli Z rotation conditioned on an array of qubits, truncating small rotation angles according to a given tolerance.
|[AssertHighestBit](xref:Microsoft.Quantum.Canon.AssertHighestBit) |> [!WARNING]
> AssertHighestBit has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.AssertMostSignificantBit> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.AssertMostSignificantBit".


|[AssertLessThanPhaseLE](xref:Microsoft.Quantum.Canon.AssertLessThanPhaseLE) |> [!WARNING]
> AssertLessThanPhaseLE has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.AssertPhaseLessThan> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.AssertPhaseLessThan".


|[AssertPhase](xref:Microsoft.Quantum.Canon.AssertPhase) |> [!WARNING]
> AssertPhase has been deprecated. Please use <xref:Microsoft.Quantum.Diagnostics.AssertPhase> instead.


|[CNOTChain](xref:Microsoft.Quantum.Canon.CNOTChain) |> [!WARNING]
> CNOTChain has been deprecated. Please use <xref:Microsoft.Quantum.Canon.ApplyCNOTChain> instead.


|[CNOTChainTarget](xref:Microsoft.Quantum.Canon.CNOTChainTarget) |> [!WARNING]
> CNOTChainTarget has been deprecated. Please use <xref:Microsoft.Quantum.Canon.ApplyCNOTChainWithTarget> instead.


|[CX](xref:Microsoft.Quantum.Canon.CX) |Applies the controlled-X (CX) gate to a pair of qubits.
$$ \begin{align} \left(\begin{matrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ 0 & 0 & 1 & 0 \end{matrix}\right) \end{align}, $$ where rows and columns are organized as in the quantum concepts guide.
|[CY](xref:Microsoft.Quantum.Canon.CY) |Applies the controlled-Y (CY) gate to a pair of qubits.
$$ \begin{align} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & -i \\\\ 0 & 0 & i & 0 \end{align}, $$ where rows and columns are organized as in the quantum concepts guide.
|[CZ](xref:Microsoft.Quantum.Canon.CZ) |Applies the controlled-Z (CZ) gate to a pair of qubits.
$$ \begin{align} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & -1 \end{align}, $$ where rows and columns are organized as in the quantum concepts guide.
|[CascadeCCNOT](xref:Microsoft.Quantum.Canon.CascadeCCNOT) |> [!WARNING]
> CascadeCCNOT has been deprecated. Please use <xref:Microsoft.Quantum.Canon.ApplyCCNOTChain> instead.


|[CascadeCNOT](xref:Microsoft.Quantum.Canon.CascadeCNOT) |> [!WARNING]
> CascadeCNOT has been deprecated. Please use <xref:Microsoft.Quantum.Canon.ApplyCNOTChain> instead.
>
> Please use @"microsoft.quantum.canon.applycnotchain".


|[CheckRepeatHIsNoOp](xref:Microsoft.Quantum.Canon.CheckRepeatHIsNoOp) |
|[Delay](xref:Microsoft.Quantum.Canon.Delay) |Applies a given operation with a delay.
|[DelayA](xref:Microsoft.Quantum.Canon.DelayA) |Applies a given operation with a delay.
|[DelayC](xref:Microsoft.Quantum.Canon.DelayC) |Applies a given operation with a delay.
|[DelayCA](xref:Microsoft.Quantum.Canon.DelayCA) |Applies a given operation with a delay.
|[HY](xref:Microsoft.Quantum.Canon.HY) |Applies the Y-basis analog to the Hadamard transformation that interchanges the Z and Y axes.
The Y Hadamard transformation $H_Y = S H$ on a single qubit is:
\begin{align} H_Y \mathrel{:=} \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\\\ i & -i \end{bmatrix}. \end{align}
|[InPlaceMajority](xref:Microsoft.Quantum.Canon.InPlaceMajority) |> [!WARNING]
> InPlaceMajority has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.ApplyMajorityInPlace> instead.
>
> Please use @"microsoft.quantum.arithmetic.applymajorityinplace".


|[InPlaceXorBE](xref:Microsoft.Quantum.Canon.InPlaceXorBE) |> [!WARNING]
> InPlaceXorBE has been deprecated. Please use <xref:ApplyReversedOpLECA(ApplyXorInPlace(value, _), target)> instead.
>
> This operation has been removed.


|[InPlaceXorLE](xref:Microsoft.Quantum.Canon.InPlaceXorLE) |> [!WARNING]
> InPlaceXorLE has been deprecated. Please use <xref:Microsoft.Quantum.Measurement.ApplyXorInPlace> instead.
>
> Please use @"Microsoft.Quantum.Measurement.ApplyXorInPlace".


|[IntegerIncrementLE](xref:Microsoft.Quantum.Canon.IntegerIncrementLE) |> [!WARNING]
> IntegerIncrementLE has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.IncrementByInteger> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.IncrementByInteger".


|[IntegerIncrementPhaseLE](xref:Microsoft.Quantum.Canon.IntegerIncrementPhaseLE) |> [!WARNING]
> IntegerIncrementPhaseLE has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.IncrementPhaseByInteger> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.IncrementPhaseByInteger".


|[IterateThroughCartesianPower](xref:Microsoft.Quantum.Canon.IterateThroughCartesianPower) |Applies an operation for each index in the Cartesian power of an integer range.
|[IterateThroughCartesianProduct](xref:Microsoft.Quantum.Canon.IterateThroughCartesianProduct) |Applies an operation for each index in the Cartesian product of several ranges.
|[ModularAddProductLE](xref:Microsoft.Quantum.Canon.ModularAddProductLE) |> [!WARNING]
> ModularAddProductLE has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.MultiplyAndAddByModularInteger> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.MultiplyAndAddByModularInteger".


|[ModularAddProductPhaseLE](xref:Microsoft.Quantum.Canon.ModularAddProductPhaseLE) |> [!WARNING]
> ModularAddProductPhaseLE has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.MultiplyAndAddPhaseByModularInteger> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.MultiplyAndAddPhaseByModularInteger".


|[ModularIncrementLE](xref:Microsoft.Quantum.Canon.ModularIncrementLE) |> [!WARNING]
> ModularIncrementLE has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.ModularIncrementByInteger> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.ModularIncrementByInteger".


|[ModularIncrementPhaseLE](xref:Microsoft.Quantum.Canon.ModularIncrementPhaseLE) |> [!WARNING]
> ModularIncrementPhaseLE has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.IncrementPhaseByModularInteger> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.IncrementPhaseByModularInteger".


|[ModularMultiplyByConstantLE](xref:Microsoft.Quantum.Canon.ModularMultiplyByConstantLE) |> [!WARNING]
> ModularMultiplyByConstantLE has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.MultiplyByModularInteger> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.MultiplyByModularInteger".


|[MultiplexOperations](xref:Microsoft.Quantum.Canon.MultiplexOperations) |Applies an array of operations controlled by an array of number states.
That is, applies Multiply-controlled unitary operation $U$ that applies a unitary $V_j$ when controlled by $n$-qubit number state $\ket{j}$.
$U = \sum^{2^n-1}_{j=0}\ket{j}\bra{j}\otimes V_j$.
|[MultiplexOperationsBruteForceFromGenerator](xref:Microsoft.Quantum.Canon.MultiplexOperationsBruteForceFromGenerator) |Applies multiply-controlled unitary operation $U$ that applies a unitary $V_j$ when controlled by n-qubit number state $\ket{j}$.
$U = \sum^{N-1}_{j=0}\ket{j}\bra{j}\otimes V_j$.
|[MultiplexOperationsFromGenerator](xref:Microsoft.Quantum.Canon.MultiplexOperationsFromGenerator) |Applies a multiply-controlled unitary operation $U$ that applies a unitary $V_j$ when controlled by n-qubit number state $\ket{j}$.
$U = \sum^{N-1}_{j=0}\ket{j}\bra{j}\otimes V_j$.
|[MultiplexPauli](xref:Microsoft.Quantum.Canon.MultiplexPauli) |Applies a Pauli rotation conditioned on an array of qubits.
|[MultiplexZ](xref:Microsoft.Quantum.Canon.MultiplexZ) |Applies a Pauli Z rotation conditioned on an array of qubits.
|[NoOp](xref:Microsoft.Quantum.Canon.NoOp) |Performs the identity operation (no-op) on an argument.
|[PermuteQubits](xref:Microsoft.Quantum.Canon.PermuteQubits) |Permutes qubits by using the SWAP operation.
|[QFT](xref:Microsoft.Quantum.Canon.QFT) |Performs the Quantum Fourier Transform on a quantum register containing an integer in the big-endian representation.
|[QFTLE](xref:Microsoft.Quantum.Canon.QFTLE) |Performs the Quantum Fourier Transform on a quantum register containing an integer in the little-endian representation.
|[RAll0](xref:Microsoft.Quantum.Canon.RAll0) |Performs a phase shift operation.
$R=\boldone-(1-e^{i \phi})\ket{0\cdots 0}\bra{0\cdots 0}$.
|[RAll1](xref:Microsoft.Quantum.Canon.RAll1) |Performs a phase shift operation.
$R=\boldone-(1-e^{i \phi})\ket{1\cdots 1}\bra{1\cdots 1}$.
|[Repeat](xref:Microsoft.Quantum.Canon.Repeat) |Repeats an operation a given number of times.
|[RepeatA](xref:Microsoft.Quantum.Canon.RepeatA) |Repeats an operation a given number of times.
|[RepeatC](xref:Microsoft.Quantum.Canon.RepeatC) |Repeats an operation a given number of times.
|[RepeatCA](xref:Microsoft.Quantum.Canon.RepeatCA) |Repeats an operation a given number of times.
|[SwapReverseRegister](xref:Microsoft.Quantum.Canon.SwapReverseRegister) |Uses SWAP gates to Reversed the order of the qubits in a register.

## Functions

| Name | Summary |
|------|---------|
|[ArcHyperbolicFnsAreCorrect](xref:Microsoft.Quantum.Canon.ArcHyperbolicFnsAreCorrect) |
|[BigEndianToLittleEndian](xref:Microsoft.Quantum.Canon.BigEndianToLittleEndian) |> [!WARNING]
> BigEndianToLittleEndian has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.BigEndianAsLittleEndian> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.BigEndianAsLittleEndian".


|[BitSizeIsCorrect](xref:Microsoft.Quantum.Canon.BitSizeIsCorrect) |
|[Bound](xref:Microsoft.Quantum.Canon.Bound) |Given an array of operations acting on a single input, produces a new operation that performs each given operation in sequence.
|[BoundA](xref:Microsoft.Quantum.Canon.BoundA) |Given an array of operations acting on a single input, produces a new operation that performs each given operation in sequence. The modifier `A` indicates that all operations in the array are adjointable.
|[BoundC](xref:Microsoft.Quantum.Canon.BoundC) |Given an array of operations acting on a single input, produces a new operation that performs each given operation in sequence. The modifier `C` indicates that all operations in the array are controllable.
|[BoundCA](xref:Microsoft.Quantum.Canon.BoundCA) |Given an array of operations acting on a single input, produces a new operation that performs each given operation in sequence. The modifier `CA` indicates that all operations in the array are adjointable and controllable.
|[CControlled](xref:Microsoft.Quantum.Canon.CControlled) |Given an operation op, returns a new operation which applies the op if a classical control bit is true. If `false`, nothing happens.
|[CControlledA](xref:Microsoft.Quantum.Canon.CControlledA) |Given an operation op, returns a new operation which applies the op if a classical control bit is true. If `false`, nothing happens. The modifier `A` indicates that the operation is adjointable.
|[CControlledC](xref:Microsoft.Quantum.Canon.CControlledC) |Given an operation op, returns a new operation which applies the op if a classical control bit is true. If `false`, nothing happens. The modifier `C` indicates that the operation is controllable.
|[CControlledCA](xref:Microsoft.Quantum.Canon.CControlledCA) |Given an operation op, returns a new operation which applies the op if a classical control bit is true. If `false`, nothing happens. The modifier `CA` indicates that the operation is controllable and adjointable.
|[CanComputeBitSizeFromLargeNumbers](xref:Microsoft.Quantum.Canon.CanComputeBitSizeFromLargeNumbers) |
|[ComplexMathIsCorrect](xref:Microsoft.Quantum.Canon.ComplexMathIsCorrect) |
|[Compose](xref:Microsoft.Quantum.Canon.Compose) |Returns the composition of two functions.
|[ConjugatedBy](xref:Microsoft.Quantum.Canon.ConjugatedBy) |Given outer and inner operations, returns a new operation that conjugates the inner operation by the outer operation.
|[ConjugatedByA](xref:Microsoft.Quantum.Canon.ConjugatedByA) |Given outer and inner operations, returns a new operation that conjugates the inner operation by the outer operation.
|[ConjugatedByC](xref:Microsoft.Quantum.Canon.ConjugatedByC) |Given outer and inner operations, returns a new operation that conjugates the inner operation by the outer operation.
|[ConjugatedByCA](xref:Microsoft.Quantum.Canon.ConjugatedByCA) |Given outer and inner operations, returns a new operation that conjugates the inner operation by the outer operation.
|[ContinuedFractionConvergentEdgeCaseTestHelper](xref:Microsoft.Quantum.Canon.ContinuedFractionConvergentEdgeCaseTestHelper) |
|[ContinuedFractionConvergentIsCorrect](xref:Microsoft.Quantum.Canon.ContinuedFractionConvergentIsCorrect) |
|[ContinuedFractionConvergentTestHelper](xref:Microsoft.Quantum.Canon.ContinuedFractionConvergentTestHelper) |
|[ControlledOnBitString](xref:Microsoft.Quantum.Canon.ControlledOnBitString) |Returns a unitary operation that applies an oracle on the target register if the control register state corresponds to a specified bit mask.
|[ControlledOnInt](xref:Microsoft.Quantum.Canon.ControlledOnInt) |Returns a unitary operator that applies an oracle on the target register if the control register state corresponds to a specified positive integer.
|[CurriedOp](xref:Microsoft.Quantum.Canon.CurriedOp) |Returns a curried version of an operation on two inputs.
That is, given an operation with two inputs, this function applies Curry's isomorphism $f(x, y) \equiv f(x)(y)$ to return an operation of one input which returns an operation of one input.
|[CurriedOpA](xref:Microsoft.Quantum.Canon.CurriedOpA) |Returns a curried version of an operation on two inputs.
That is, given an operation with two inputs, this function applies Curry's isomorphism $f(x, y) \equiv f(x)(y)$ to return an operation of one input which returns an operation of one input.
|[CurriedOpC](xref:Microsoft.Quantum.Canon.CurriedOpC) |Returns a curried version of an operation on two inputs.
That is, given an operation with two inputs, this function applies Curry's isomorphism $f(x, y) \equiv f(x)(y)$ to return an operation of one input which returns an operation of one input.
|[CurriedOpCA](xref:Microsoft.Quantum.Canon.CurriedOpCA) |Returns a curried version of an operation on two inputs.
That is, given an operation with two inputs, this function applies Curry's isomorphism $f(x, y) \equiv f(x)(y)$ to return an operation of one input which returns an operation of one input.
|[DecomposeIntoTimeStepsCA](xref:Microsoft.Quantum.Canon.DecomposeIntoTimeStepsCA) |> [!WARNING]
> DecomposeIntoTimeStepsCA has been deprecated. Please use <xref:Microsoft.Quantum.Canon.DecomposedIntoTimeStepsCA> instead.


|[DecomposedIntoTimeStepsCA](xref:Microsoft.Quantum.Canon.DecomposedIntoTimeStepsCA) |Returns an operation implementing the Trotter–Suzuki integrator for a given operation.
|[Delayed](xref:Microsoft.Quantum.Canon.Delayed) |Returns an operation that applies given operation with given argument.
|[DelayedA](xref:Microsoft.Quantum.Canon.DelayedA) |Returns an operation that applies given operation with given argument.
|[DelayedC](xref:Microsoft.Quantum.Canon.DelayedC) |Returns an operation that applies given operation with given argument.
|[DelayedCA](xref:Microsoft.Quantum.Canon.DelayedCA) |Returns an operation that applies given operation with given argument.
|[EmbedPauli](xref:Microsoft.Quantum.Canon.EmbedPauli) |Given a single-qubit Pauli operator and the index of a qubit, returns a multi-qubit Pauli operator with the given single-qubit operator at that index and `PauliI` at every other index.
|[ExpModIsCorrect](xref:Microsoft.Quantum.Canon.ExpModIsCorrect) |
|[ExtendedGreatestCommonDivisorIIsCorrect](xref:Microsoft.Quantum.Canon.ExtendedGreatestCommonDivisorIIsCorrect) |
|[ExtendedGreatestCommonDivisorITestHelper](xref:Microsoft.Quantum.Canon.ExtendedGreatestCommonDivisorITestHelper) |
|[Fst](xref:Microsoft.Quantum.Canon.Fst) |Given a pair, returns its first element.
|[GreatestCommonDivisorLIsCorrect](xref:Microsoft.Quantum.Canon.GreatestCommonDivisorLIsCorrect) |
|[Ignore](xref:Microsoft.Quantum.Canon.Ignore) |Ignores the output of an operation or function.
|[IsRangeEmpty](xref:Microsoft.Quantum.Canon.IsRangeEmpty) |Returns true if and only if input range is empty.
|[IsResultOne](xref:Microsoft.Quantum.Canon.IsResultOne) |Tests if a given Result value is equal to `One`.
|[IsResultZero](xref:Microsoft.Quantum.Canon.IsResultZero) |Tests if a given Result value is equal to `Zero`.
|[LittleEndianToBigEndian](xref:Microsoft.Quantum.Canon.LittleEndianToBigEndian) |> [!WARNING]
> LittleEndianToBigEndian has been deprecated. Please use <xref:Microsoft.Quantum.Arithmetic.LittleEndianAsBigEndian> instead.
>
> Please use @"Microsoft.Quantum.Arithmetic.LittleEndianAsBigEndian".


|[MultiplexerBruteForceFromGenerator](xref:Microsoft.Quantum.Canon.MultiplexerBruteForceFromGenerator) |Returns a multiply-controlled unitary operation $U$ that applies a unitary $V_j$ when controlled by n-qubit number state $\ket{j}$.
$U = \sum^{2^n-1}_{j=0}\ket{j}\bra{j}\otimes V_j$.
|[MultiplexerFromGenerator](xref:Microsoft.Quantum.Canon.MultiplexerFromGenerator) |Returns a multiply-controlled unitary operation $U$ that applies a unitary $V_j$ when controlled by n-qubit number state $\ket{j}$.
$U = \sum^{2^n-1}_{j=0}\ket{j}\bra{j}\otimes V_j$.
|[NativeFnsAreCallable](xref:Microsoft.Quantum.Canon.NativeFnsAreCallable) |
|[OperationPow](xref:Microsoft.Quantum.Canon.OperationPow) |Raises an operation to a power.
That is, given an operation representing a gate $U$, returns a new operation $U^m$ for a power $m$.
|[OperationPowA](xref:Microsoft.Quantum.Canon.OperationPowA) |Raises an operation to a power. The modifier `A` indicates that the operation is adjointable.
That is, given an operation representing a gate $U$, returns a new operation $U^m$ for a power $m$.
|[OperationPowC](xref:Microsoft.Quantum.Canon.OperationPowC) |Raises an operation to a power. The modifier `C` indicates that the operation is controllable.
That is, given an operation representing a gate $U$, returns a new operation $U^m$ for a power $m$.
|[OperationPowCA](xref:Microsoft.Quantum.Canon.OperationPowCA) |Raises an operation to a power. The modifier `A` indicates that the operation is controllable and adjointable.
That is, given an operation representing a gate $U$, returns a new operation $U^m$ for a power $m$.
|[PNormIsCorrect](xref:Microsoft.Quantum.Canon.PNormIsCorrect) |
|[RealModIsCorrect](xref:Microsoft.Quantum.Canon.RealModIsCorrect) |
|[RestrictedToSubregister](xref:Microsoft.Quantum.Canon.RestrictedToSubregister) |Restricts an operation to an array of indices of a register, i.e., a subregister.
|[RestrictedToSubregisterA](xref:Microsoft.Quantum.Canon.RestrictedToSubregisterA) |Restricts an operation to an array of indices of a register, i.e., a subregister. The modifier `A` indicates that the operation is adjointable.
|[RestrictedToSubregisterC](xref:Microsoft.Quantum.Canon.RestrictedToSubregisterC) |Restricts an operation to an array of indices of a register, i.e., a subregister. The modifier `C` indicates that the operation is controllable.
|[RestrictedToSubregisterCA](xref:Microsoft.Quantum.Canon.RestrictedToSubregisterCA) |Restricts an operation to an array of indices of a register, i.e., a subregister. The modifier `CA` indicates that the operation is controllable and adjointable.
|[Snd](xref:Microsoft.Quantum.Canon.Snd) |Given a pair, returns its second element.
|[SquaredNormIsCorrect](xref:Microsoft.Quantum.Canon.SquaredNormIsCorrect) |
|[StackCapacity](xref:Microsoft.Quantum.Canon.StackCapacity) |> [!WARNING]
> StackCapacity has been deprecated.


|[StackLength](xref:Microsoft.Quantum.Canon.StackLength) |> [!WARNING]
> StackLength has been deprecated.


|[StackNew](xref:Microsoft.Quantum.Canon.StackNew) |> [!WARNING]
> StackNew has been deprecated.


|[StackPeek](xref:Microsoft.Quantum.Canon.StackPeek) |> [!WARNING]
> StackPeek has been deprecated.


|[StackPop](xref:Microsoft.Quantum.Canon.StackPop) |> [!WARNING]
> StackPop has been deprecated.


|[StackPush](xref:Microsoft.Quantum.Canon.StackPush) |> [!WARNING]
> StackPush has been deprecated.


|[TransformedOperation](xref:Microsoft.Quantum.Canon.TransformedOperation) |Given a function and an operation, returns a new operation whose input is transformed by the given function.
|[TransformedOperationA](xref:Microsoft.Quantum.Canon.TransformedOperationA) |Given a function and an operation, returns a new operation whose input is transformed by the given function.
|[TransformedOperationC](xref:Microsoft.Quantum.Canon.TransformedOperationC) |Given a function and an operation, returns a new operation whose input is transformed by the given function.
|[TransformedOperationCA](xref:Microsoft.Quantum.Canon.TransformedOperationCA) |Given a function and an operation, returns a new operation whose input is transformed by the given function.
|[UncurriedOp](xref:Microsoft.Quantum.Canon.UncurriedOp) |Given a function which returns operations, returns a new operation which takes both inputs as a tuple.
|[UncurriedOpA](xref:Microsoft.Quantum.Canon.UncurriedOpA) |Given a function which returns operations, returns a new operation which takes both inputs as a tuple. The modifier `A` indicates that the operations are adjointable.
|[UncurriedOpC](xref:Microsoft.Quantum.Canon.UncurriedOpC) |Given a function which returns operations, returns a new operation which takes both inputs as a tuple. The modifier `C` indicates that the operations are controllable.
|[UncurriedOpCA](xref:Microsoft.Quantum.Canon.UncurriedOpCA) |Given a function which returns operations, returns a new operation which takes both inputs as a tuple. The modifier `CA` indicates that the operations are controllable and adjointable.
|[WeightOnePaulis](xref:Microsoft.Quantum.Canon.WeightOnePaulis) |Returns an array of all weight-1 Pauli operators on a given number of qubits.
|[XOR](xref:Microsoft.Quantum.Canon.XOR) |> [!WARNING]
> XOR has been deprecated. Please use <xref:Microsoft.Quantum.Logical.Xor> instead.
>
> Please use @"microsoft.quantum.logical.xor".



## User-defined types

| Name | Summary |
|------|---------|
|[CCNOTop](xref:Microsoft.Quantum.Canon.CCNOTop) |The signature type of CCNOT gate.
|[ResultStack](xref:Microsoft.Quantum.Canon.ResultStack) |> [!WARNING]
> ResultStack has been deprecated.


<!-- /summaries -->
