---
uid: Microsoft.Quantum.Canon
title: Microsoft.Quantum.Canon namespace
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Canon
qsharp.summary: This namespace contains a variety of useful operations and functions.
---

# Microsoft.Quantum.Canon namespace

This namespace contains a variety of useful operations and functions.



## Description

To learn more about the operations in this namespace, see
[Higher-Order Control Flow](xref:microsoft.quantum.libraries.overview-standard.control-flow) and
[Quantum Fourier Transform](xref:microsoft.quantum.libraries.overview.standard.algorithms#quantum-fourier-transform).
<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[AndLadder](xref:Microsoft.Quantum.Canon.AndLadder) |Performs a controlled "AND ladder" on a register of target qubits. |
|[ApplyAnd](xref:Microsoft.Quantum.Canon.ApplyAnd) |Inverts a given target qubit if and only if both control qubits are in the 1 state, using measurement to perform the adjoint operation. |
|[ApplyCCNOTChain](xref:Microsoft.Quantum.Canon.ApplyCCNOTChain) |Implements a cascade of CCNOT gates controlled on corresponding bits of two qubit registers, acting on the next qubit of one of the registers. Starting from the qubits at position 0 in both registers as controls, CCNOT is applied to the qubit at position 1 of the target register, then controlled by the qubits at position 1 acting on the qubit at position 2 in the target register, etc., ending with an action on the target qubit in position `Length(nQubits)-1`. |
|[ApplyCNOTChain](xref:Microsoft.Quantum.Canon.ApplyCNOTChain) |Computes the parity of a register of qubits in-place. |
|[ApplyCNOTChainWithTarget](xref:Microsoft.Quantum.Canon.ApplyCNOTChainWithTarget) |Computes the parity of an array of qubits into a target qubit. |
|[ApplyControlledOnBitString](xref:Microsoft.Quantum.Canon.ApplyControlledOnBitString) |Applies a unitary operation on the target register, controlled on a a state specified by a given bit mask. |
|[ApplyControlledOnInt](xref:Microsoft.Quantum.Canon.ApplyControlledOnInt) |Applies a unitary operation on the target register if the control register state corresponds to a specified positive integer. |
|[ApplyDiagonalUnitary](xref:Microsoft.Quantum.Canon.ApplyDiagonalUnitary) |Applies an array of complex phases to numeric basis states of a register of qubits. |
|[ApplyFermionicSWAP](xref:Microsoft.Quantum.Canon.ApplyFermionicSWAP) |Applies the Fermionic SWAP. |
|[ApplyIf](xref:Microsoft.Quantum.Canon.ApplyIf) |Applies an operation conditioned on a classical bit. |
|[ApplyIfA](xref:Microsoft.Quantum.Canon.ApplyIfA) |Applies a adjointable operation conditioned on a classical bit. |
|[ApplyIfC](xref:Microsoft.Quantum.Canon.ApplyIfC) |Applies a controllable operation conditioned on a classical bit. |
|[ApplyIfCA](xref:Microsoft.Quantum.Canon.ApplyIfCA) |Applies a unitary operation conditioned on a classical bit. |
|[ApplyIfElseB](xref:Microsoft.Quantum.Canon.ApplyIfElseB) |Applies one of two operations, depending on the value of a classical bit. |
|[ApplyIfElseBA](xref:Microsoft.Quantum.Canon.ApplyIfElseBA) |Applies one of two adjointable operations, depending on the value of a classical bit. |
|[ApplyIfElseBC](xref:Microsoft.Quantum.Canon.ApplyIfElseBC) |Applies one of two controllable operations, depending on the value of a classical bit. |
|[ApplyIfElseBCA](xref:Microsoft.Quantum.Canon.ApplyIfElseBCA) |Applies one of two unitary operations, depending on the value of a classical bit. |
|[ApplyIfElseR](xref:Microsoft.Quantum.Canon.ApplyIfElseR) |Applies one of two operations, depending on the value of a classical result. |
|[ApplyIfElseRA](xref:Microsoft.Quantum.Canon.ApplyIfElseRA) |Applies one of two adjointable operations, depending on the value of a classical result. |
|[ApplyIfElseRC](xref:Microsoft.Quantum.Canon.ApplyIfElseRC) |Applies one of two controllable operations, depending on the value of a classical result. |
|[ApplyIfElseRCA](xref:Microsoft.Quantum.Canon.ApplyIfElseRCA) |Applies one of two unitary operations, depending on the value of a classical result. |
|[ApplyIfOne](xref:Microsoft.Quantum.Canon.ApplyIfOne) |Applies an operation conditioned on a classical result value being one. |
|[ApplyIfOneA](xref:Microsoft.Quantum.Canon.ApplyIfOneA) |Applies an adjointable operation conditioned on a classical result value being one. |
|[ApplyIfOneC](xref:Microsoft.Quantum.Canon.ApplyIfOneC) |Applies a controllable operation conditioned on a classical result value being one. |
|[ApplyIfOneCA](xref:Microsoft.Quantum.Canon.ApplyIfOneCA) |Applies a unitary operation conditioned on a classical result value being one. |
|[ApplyIfZero](xref:Microsoft.Quantum.Canon.ApplyIfZero) |Applies an operation conditioned on a classical result value being zero. |
|[ApplyIfZeroA](xref:Microsoft.Quantum.Canon.ApplyIfZeroA) |Applies an adjointable operation conditioned on a classical result value being zero. |
|[ApplyIfZeroC](xref:Microsoft.Quantum.Canon.ApplyIfZeroC) |Applies a controllable operation conditioned on a classical result value being zero. |
|[ApplyIfZeroCA](xref:Microsoft.Quantum.Canon.ApplyIfZeroCA) |Applies a unitary operation conditioned on a classical result value being zero. |
|[ApplyLowDepthAnd](xref:Microsoft.Quantum.Canon.ApplyLowDepthAnd) |Inverts a given target qubit if and only if both control qubits are in the 1 state, with T-depth 1, using measurement to perform the adjoint operation. |
|[ApplyMultiControlledC](xref:Microsoft.Quantum.Canon.ApplyMultiControlledC) |Applies a multiply controlled version of a singly controlled operation. The modifier `C` indicates that the single-qubit operation is controllable. |
|[ApplyMultiControlledCA](xref:Microsoft.Quantum.Canon.ApplyMultiControlledCA) |Applies a multiply controlled version of a singly controlled operation. The modifier `CA` indicates that the single-qubit operation is controllable and adjointable. |
|[ApplyOpRepeatedlyOver](xref:Microsoft.Quantum.Canon.ApplyOpRepeatedlyOver) |Applies the same op over a qubit register multiple times. |
|[ApplyOpRepeatedlyOverA](xref:Microsoft.Quantum.Canon.ApplyOpRepeatedlyOverA) |Applies the same op over a qubit register multiple times. |
|[ApplyOpRepeatedlyOverC](xref:Microsoft.Quantum.Canon.ApplyOpRepeatedlyOverC) |Applies the same op over a qubit register multiple times. |
|[ApplyOpRepeatedlyOverCA](xref:Microsoft.Quantum.Canon.ApplyOpRepeatedlyOverCA) |Applies the same op over a qubit register multiple times. |
|[ApplyP](xref:Microsoft.Quantum.Canon.ApplyP) |Given a single-qubit Pauli operator, applies the corresponding operation to a single qubit. |
|[ApplyPauli](xref:Microsoft.Quantum.Canon.ApplyPauli) |Given a multi-qubit Pauli operator, applies the corresponding operation to a register. |
|[ApplyPauliFromBitString](xref:Microsoft.Quantum.Canon.ApplyPauliFromBitString) |Applies a Pauli operator on each qubit in an array if the corresponding bit of a Boolean array matches a given input. |
|[ApplyQuantumFourierTransform](xref:Microsoft.Quantum.Canon.ApplyQuantumFourierTransform) |Performs the Quantum Fourier Transform on a quantum register containing an integer in the little-endian representation. |
|[ApplyReversedOpBigEndianA](xref:Microsoft.Quantum.Canon.ApplyReversedOpBigEndianA) |> [!WARNING] |
|[ApplyReversedOpBigEndianC](xref:Microsoft.Quantum.Canon.ApplyReversedOpBigEndianC) |> [!WARNING] |
|[ApplyReversedOpBigEndianCA](xref:Microsoft.Quantum.Canon.ApplyReversedOpBigEndianCA) |> [!WARNING] |
|[ApplyReversedOpLittleEndianA](xref:Microsoft.Quantum.Canon.ApplyReversedOpLittleEndianA) |> [!WARNING] |
|[ApplyReversedOpLittleEndianC](xref:Microsoft.Quantum.Canon.ApplyReversedOpLittleEndianC) |> [!WARNING] |
|[ApplyReversedOpLittleEndianCA](xref:Microsoft.Quantum.Canon.ApplyReversedOpLittleEndianCA) |> [!WARNING] |
|[ApplyRippleCarryComparatorLE](xref:Microsoft.Quantum.Canon.ApplyRippleCarryComparatorLE) |> [!WARNING] |
|[ApplySeriesOfOps](xref:Microsoft.Quantum.Canon.ApplySeriesOfOps) |Applies a list of ops and their targets sequentially on an array. |
|[ApplySeriesOfOpsA](xref:Microsoft.Quantum.Canon.ApplySeriesOfOpsA) |Applies a list of ops and their targets sequentially on an array. (Adjoint) |
|[ApplySeriesOfOpsC](xref:Microsoft.Quantum.Canon.ApplySeriesOfOpsC) |Applies a list of ops and their targets sequentially on an array. (Controlled) |
|[ApplySeriesOfOpsCA](xref:Microsoft.Quantum.Canon.ApplySeriesOfOpsCA) |Applies a list of ops and their targets sequentially on an array. (Adjoint + Controlled) |
|[ApplyToEach](xref:Microsoft.Quantum.Canon.ApplyToEach) |Applies a single-qubit operation to each element in a register. |
|[ApplyToEachA](xref:Microsoft.Quantum.Canon.ApplyToEachA) |Applies a single-qubit operation to each element in a register. The modifier `A` indicates that the single-qubit operation is adjointable. |
|[ApplyToEachC](xref:Microsoft.Quantum.Canon.ApplyToEachC) |Applies a single-qubit operation to each element in a register. The modifier `C` indicates that the single-qubit operation is controllable. |
|[ApplyToEachCA](xref:Microsoft.Quantum.Canon.ApplyToEachCA) |Applies a single-qubit operation to each element in a register. The modifier `CA` indicates that the single-qubit operation is controllable and adjointable. |
|[ApplyToEachIndex](xref:Microsoft.Quantum.Canon.ApplyToEachIndex) |Applies a single-qubit operation to each indexed element in a register. |
|[ApplyToEachIndexA](xref:Microsoft.Quantum.Canon.ApplyToEachIndexA) |Applies a single-qubit operation to each indexed element in a register. The modifier `A` indicates that the single-qubit operation is adjointable. |
|[ApplyToEachIndexC](xref:Microsoft.Quantum.Canon.ApplyToEachIndexC) |Applies a single-qubit operation to each indexed element in a register. The modifier `C` indicates that the single-qubit operation is controllable. |
|[ApplyToEachIndexCA](xref:Microsoft.Quantum.Canon.ApplyToEachIndexCA) |Applies a single-qubit operation to each indexed element in a register. The modifier `CA` indicates that the single-qubit operation is adjointable and controllable. |
|[ApplyToElement](xref:Microsoft.Quantum.Canon.ApplyToElement) |Applies an operation to a given element of an array. |
|[ApplyToElementA](xref:Microsoft.Quantum.Canon.ApplyToElementA) |Applies an operation to a given element of an array. |
|[ApplyToElementC](xref:Microsoft.Quantum.Canon.ApplyToElementC) |Applies an operation to a given element of an array. |
|[ApplyToElementCA](xref:Microsoft.Quantum.Canon.ApplyToElementCA) |Applies an operation to a given element of an array. |
|[ApplyToFirstQubit](xref:Microsoft.Quantum.Canon.ApplyToFirstQubit) |Applies an operation to the first qubit in the register. |
|[ApplyToFirstQubitA](xref:Microsoft.Quantum.Canon.ApplyToFirstQubitA) |Applies an operation to the first qubit in the register. The modifier `A` indicates that the operation is adjointable. |
|[ApplyToFirstQubitC](xref:Microsoft.Quantum.Canon.ApplyToFirstQubitC) |Applies operation op to the first qubit in the register. The modifier `C` indicates that the operation is controllable. |
|[ApplyToFirstQubitCA](xref:Microsoft.Quantum.Canon.ApplyToFirstQubitCA) |Applies operation op to the first qubit in the register. The modifier `CA` indicates that the operation is controllable and adjointable. |
|[ApplyToFirstThreeQubits](xref:Microsoft.Quantum.Canon.ApplyToFirstThreeQubits) |Applies an operation to the first three qubits in the register. |
|[ApplyToFirstThreeQubitsA](xref:Microsoft.Quantum.Canon.ApplyToFirstThreeQubitsA) |Applies an operation to the first three qubits in the register. The modifier `A` indicates that the operation is adjointable. |
|[ApplyToFirstThreeQubitsC](xref:Microsoft.Quantum.Canon.ApplyToFirstThreeQubitsC) |Applies an operation to the first three qubits in the register. The modifier `C` indicates that the operation is controllable. |
|[ApplyToFirstThreeQubitsCA](xref:Microsoft.Quantum.Canon.ApplyToFirstThreeQubitsCA) |Applies an operation to the first three qubits in the register. The modifier `CA` indicates that the operation is controllable and adjointable. |
|[ApplyToFirstTwoQubits](xref:Microsoft.Quantum.Canon.ApplyToFirstTwoQubits) |Applies an operation to the first two qubits in the register. |
|[ApplyToFirstTwoQubitsA](xref:Microsoft.Quantum.Canon.ApplyToFirstTwoQubitsA) |Applies an operation to the first two qubits in the register. The modifier `A` indicates that the operation is adjointable. |
|[ApplyToFirstTwoQubitsC](xref:Microsoft.Quantum.Canon.ApplyToFirstTwoQubitsC) |Applies an operation to the first two qubits in the register. The modifier `C` indicates that the operation is controllable. |
|[ApplyToFirstTwoQubitsCA](xref:Microsoft.Quantum.Canon.ApplyToFirstTwoQubitsCA) |Applies an operation to the first two qubits in the register. The modifier `CA` indicates that the operation is controllable and adjointable. |
|[ApplyToHead](xref:Microsoft.Quantum.Canon.ApplyToHead) |Applies an operation to the first element of an array. |
|[ApplyToHeadA](xref:Microsoft.Quantum.Canon.ApplyToHeadA) |Applies an operation to the first element of an array. |
|[ApplyToHeadC](xref:Microsoft.Quantum.Canon.ApplyToHeadC) |Applies an operation to the first element of an array. |
|[ApplyToHeadCA](xref:Microsoft.Quantum.Canon.ApplyToHeadCA) |Applies an operation to the first element of an array. |
|[ApplyToMost](xref:Microsoft.Quantum.Canon.ApplyToMost) |Applies an operation to all but the last element of an array. |
|[ApplyToMostA](xref:Microsoft.Quantum.Canon.ApplyToMostA) |Applies an operation to all but the last element of an array. |
|[ApplyToMostC](xref:Microsoft.Quantum.Canon.ApplyToMostC) |Applies an operation to all but the last element of an array. |
|[ApplyToMostCA](xref:Microsoft.Quantum.Canon.ApplyToMostCA) |Applies an operation to all but the last element of an array. |
|[ApplyToPartition](xref:Microsoft.Quantum.Canon.ApplyToPartition) |Applies a pair of operations to a given partition of a register into two parts. |
|[ApplyToPartitionA](xref:Microsoft.Quantum.Canon.ApplyToPartitionA) |Applies a pair of operations to a given partition of a register into two parts. The modifier `A` indicates that the operation is adjointable. |
|[ApplyToPartitionC](xref:Microsoft.Quantum.Canon.ApplyToPartitionC) |Applies a pair of operations to a given partition of a register into two parts. The modifier `C` indicates that the operation is controllable. |
|[ApplyToPartitionCA](xref:Microsoft.Quantum.Canon.ApplyToPartitionCA) |Applies a pair of operations to a given partition of a register into two parts. The modifier `CA` indicates that the operation is controllable and adjointable. |
|[ApplyToRest](xref:Microsoft.Quantum.Canon.ApplyToRest) |Applies an operation to all but the first element of an array. |
|[ApplyToRestA](xref:Microsoft.Quantum.Canon.ApplyToRestA) |Applies an operation to all but the first element of an array. |
|[ApplyToRestC](xref:Microsoft.Quantum.Canon.ApplyToRestC) |Applies an operation to all but the first element of an array. |
|[ApplyToRestCA](xref:Microsoft.Quantum.Canon.ApplyToRestCA) |Applies an operation to all but the first element of an array. |
|[ApplyToSubregister](xref:Microsoft.Quantum.Canon.ApplyToSubregister) |Applies an operation to a subregister of a register, with qubits specified by an array of their indices. |
|[ApplyToSubregisterA](xref:Microsoft.Quantum.Canon.ApplyToSubregisterA) |Applies an operation to a subregister of a register, with qubits specified by an array of their indices. The modifier `A` indicates that the operation is adjointable. |
|[ApplyToSubregisterC](xref:Microsoft.Quantum.Canon.ApplyToSubregisterC) |Applies an operation to a subregister of a register, with qubits specified by an array of their indices. The modifier `C` indicates that the operation is controllable. |
|[ApplyToSubregisterCA](xref:Microsoft.Quantum.Canon.ApplyToSubregisterCA) |Applies an operation to a subregister of a register, with qubits specified by an array of their indices. The modifier `CA` indicates that the operation is controllable and adjointable. |
|[ApplyToTail](xref:Microsoft.Quantum.Canon.ApplyToTail) |Applies an operation to the last element of an array. |
|[ApplyToTailA](xref:Microsoft.Quantum.Canon.ApplyToTailA) |Applies an operation to the last element of an array. |
|[ApplyToTailC](xref:Microsoft.Quantum.Canon.ApplyToTailC) |Applies an operation to the last element of an array. |
|[ApplyToTailCA](xref:Microsoft.Quantum.Canon.ApplyToTailCA) |Applies an operation to the last element of an array. |
|[ApplyWith](xref:Microsoft.Quantum.Canon.ApplyWith) |Given two operations, applies one as conjugated with the other. |
|[ApplyWithA](xref:Microsoft.Quantum.Canon.ApplyWithA) |Given two operations, applies one as conjugated with the other. |
|[ApplyWithC](xref:Microsoft.Quantum.Canon.ApplyWithC) |Given two operations, applies one as conjugated with the other. |
|[ApplyWithCA](xref:Microsoft.Quantum.Canon.ApplyWithCA) |Given two operations, applies one as conjugated with the other. |
|[ApplyWithInputTransformation](xref:Microsoft.Quantum.Canon.ApplyWithInputTransformation) |Given an operation that accepts some input, a function that returns an output compatible with that operation, and an input to that function, applies the operation using the function to transform the input to a form expected by the operation. |
|[ApplyWithInputTransformationA](xref:Microsoft.Quantum.Canon.ApplyWithInputTransformationA) |Given an operation that accepts some input, a function that returns an output compatible with that operation, and an input to that function, applies the operation using the function to transform the input to a form expected by the operation. |
|[ApplyWithInputTransformationC](xref:Microsoft.Quantum.Canon.ApplyWithInputTransformationC) |Given an operation that accepts some input, a function that returns an output compatible with that operation, and an input to that function, applies the operation using the function to transform the input to a form expected by the operation. |
|[ApplyWithInputTransformationCA](xref:Microsoft.Quantum.Canon.ApplyWithInputTransformationCA) |Given an operation that accepts some input, a function that returns an output compatible with that operation, and an input to that function, applies the operation using the function to transform the input to a form expected by the operation. |
|[ApproximateQFT](xref:Microsoft.Quantum.Canon.ApproximateQFT) |Apply the Approximate Quantum Fourier Transform (AQFT) to a quantum register. |
|[ApproximatelyApplyDiagonalUnitary](xref:Microsoft.Quantum.Canon.ApproximatelyApplyDiagonalUnitary) |Applies an array of complex phases to numeric basis states of a register of qubits, truncating small rotation angles according to a given tolerance. |
|[ApproximatelyMultiplexPauli](xref:Microsoft.Quantum.Canon.ApproximatelyMultiplexPauli) |Applies a Pauli rotation conditioned on an array of qubits, truncating small rotation angles according to a given tolerance. |
|[ApproximatelyMultiplexZ](xref:Microsoft.Quantum.Canon.ApproximatelyMultiplexZ) |Applies a Pauli Z rotation conditioned on an array of qubits, truncating small rotation angles according to a given tolerance. |
|[AssertHighestBit](xref:Microsoft.Quantum.Canon.AssertHighestBit) |> [!WARNING] |
|[AssertLessThanPhaseLE](xref:Microsoft.Quantum.Canon.AssertLessThanPhaseLE) |> [!WARNING] |
|[AssertPhase](xref:Microsoft.Quantum.Canon.AssertPhase) |> [!WARNING] |
|[CNOTChain](xref:Microsoft.Quantum.Canon.CNOTChain) |> [!WARNING] |
|[CNOTChainTarget](xref:Microsoft.Quantum.Canon.CNOTChainTarget) |> [!WARNING] |
|[CX](xref:Microsoft.Quantum.Canon.CX) |Applies the controlled-X (CX) gate to a pair of qubits. |
|[CY](xref:Microsoft.Quantum.Canon.CY) |Applies the controlled-Y (CY) gate to a pair of qubits. |
|[CZ](xref:Microsoft.Quantum.Canon.CZ) |Applies the controlled-Z (CZ) gate to a pair of qubits. |
|[CascadeCCNOT](xref:Microsoft.Quantum.Canon.CascadeCCNOT) |> [!WARNING] |
|[CascadeCNOT](xref:Microsoft.Quantum.Canon.CascadeCNOT) |> [!WARNING] |
|[Delay](xref:Microsoft.Quantum.Canon.Delay) |Applies a given operation with a delay. |
|[DelayA](xref:Microsoft.Quantum.Canon.DelayA) |Applies a given operation with a delay. |
|[DelayC](xref:Microsoft.Quantum.Canon.DelayC) |Applies a given operation with a delay. |
|[DelayCA](xref:Microsoft.Quantum.Canon.DelayCA) |Applies a given operation with a delay. |
|[HY](xref:Microsoft.Quantum.Canon.HY) |Applies the Y-basis analog to the Hadamard transformation that interchanges the Z and Y axes. |
|[InPlaceMajority](xref:Microsoft.Quantum.Canon.InPlaceMajority) |> [!WARNING] |
|[InPlaceXorBE](xref:Microsoft.Quantum.Canon.InPlaceXorBE) |> [!WARNING] |
|[InPlaceXorLE](xref:Microsoft.Quantum.Canon.InPlaceXorLE) |> [!WARNING] |
|[IntegerIncrementLE](xref:Microsoft.Quantum.Canon.IntegerIncrementLE) |> [!WARNING] |
|[IntegerIncrementPhaseLE](xref:Microsoft.Quantum.Canon.IntegerIncrementPhaseLE) |> [!WARNING] |
|[IterateThroughCartesianPower](xref:Microsoft.Quantum.Canon.IterateThroughCartesianPower) |Applies an operation for each index in the Cartesian power of an integer range. |
|[IterateThroughCartesianProduct](xref:Microsoft.Quantum.Canon.IterateThroughCartesianProduct) |Applies an operation for each index in the Cartesian product of several ranges. |
|[ModularAddProductLE](xref:Microsoft.Quantum.Canon.ModularAddProductLE) |> [!WARNING] |
|[ModularAddProductPhaseLE](xref:Microsoft.Quantum.Canon.ModularAddProductPhaseLE) |> [!WARNING] |
|[ModularIncrementLE](xref:Microsoft.Quantum.Canon.ModularIncrementLE) |> [!WARNING] |
|[ModularIncrementPhaseLE](xref:Microsoft.Quantum.Canon.ModularIncrementPhaseLE) |> [!WARNING] |
|[ModularMultiplyByConstantLE](xref:Microsoft.Quantum.Canon.ModularMultiplyByConstantLE) |> [!WARNING] |
|[MultiplexOperations](xref:Microsoft.Quantum.Canon.MultiplexOperations) |Applies an array of operations controlled by an array of number states. |
|[MultiplexOperationsBruteForceFromGenerator](xref:Microsoft.Quantum.Canon.MultiplexOperationsBruteForceFromGenerator) |Applies multiply-controlled unitary operation $U$ that applies a unitary $V_j$ when controlled by n-qubit number state $\ket{j}$. |
|[MultiplexOperationsFromGenerator](xref:Microsoft.Quantum.Canon.MultiplexOperationsFromGenerator) |Applies a multiply-controlled unitary operation $U$ that applies a unitary $V_j$ when controlled by n-qubit number state $\ket{j}$. |
|[MultiplexPauli](xref:Microsoft.Quantum.Canon.MultiplexPauli) |Applies a Pauli rotation conditioned on an array of qubits. |
|[MultiplexZ](xref:Microsoft.Quantum.Canon.MultiplexZ) |Applies a Pauli Z rotation conditioned on an array of qubits. |
|[NoOp](xref:Microsoft.Quantum.Canon.NoOp) |Performs the identity operation (no-op) on an argument. |
|[PermuteQubits](xref:Microsoft.Quantum.Canon.PermuteQubits) |Permutes qubits by using the SWAP operation. |
|[QFT](xref:Microsoft.Quantum.Canon.QFT) |Performs the Quantum Fourier Transform on a quantum register containing an integer in the big-endian representation. |
|[QFTLE](xref:Microsoft.Quantum.Canon.QFTLE) |Performs the Quantum Fourier Transform on a quantum register containing an integer in the little-endian representation. |
|[RAll0](xref:Microsoft.Quantum.Canon.RAll0) |Rotates the all-zeros state by a given phase. |
|[RAll1](xref:Microsoft.Quantum.Canon.RAll1) |Rotates the all-ones state by a given phase. |
|[Repeat](xref:Microsoft.Quantum.Canon.Repeat) |Repeats an operation a given number of times. |
|[RepeatA](xref:Microsoft.Quantum.Canon.RepeatA) |Repeats an operation a given number of times. |
|[RepeatC](xref:Microsoft.Quantum.Canon.RepeatC) |Repeats an operation a given number of times. |
|[RepeatCA](xref:Microsoft.Quantum.Canon.RepeatCA) |Repeats an operation a given number of times. |
|[SwapReverseRegister](xref:Microsoft.Quantum.Canon.SwapReverseRegister) |Uses SWAP gates to Reversed the order of the qubits in a register. |

## Functions

| Name | Summary |
|------|---------|
|[BigEndianToLittleEndian](xref:Microsoft.Quantum.Canon.BigEndianToLittleEndian) |> [!WARNING] |
|[Bound](xref:Microsoft.Quantum.Canon.Bound) |Given an array of operations acting on a single input, produces a new operation that performs each given operation in sequence. |
|[BoundA](xref:Microsoft.Quantum.Canon.BoundA) |Given an array of operations acting on a single input, produces a new operation that performs each given operation in sequence. The modifier `A` indicates that all operations in the array are adjointable. |
|[BoundC](xref:Microsoft.Quantum.Canon.BoundC) |Given an array of operations acting on a single input, produces a new operation that performs each given operation in sequence. The modifier `C` indicates that all operations in the array are controllable. |
|[BoundCA](xref:Microsoft.Quantum.Canon.BoundCA) |Given an array of operations acting on a single input, produces a new operation that performs each given operation in sequence. The modifier `CA` indicates that all operations in the array are adjointable and controllable. |
|[CControlled](xref:Microsoft.Quantum.Canon.CControlled) |Given an operation op, returns a new operation which applies the op if a classical control bit is true. If `false`, nothing happens. |
|[CControlledA](xref:Microsoft.Quantum.Canon.CControlledA) |Given an operation op, returns a new operation which applies the op if a classical control bit is true. If `false`, nothing happens. The modifier `A` indicates that the operation is adjointable. |
|[CControlledC](xref:Microsoft.Quantum.Canon.CControlledC) |Given an operation op, returns a new operation which applies the op if a classical control bit is true. If `false`, nothing happens. The modifier `C` indicates that the operation is controllable. |
|[CControlledCA](xref:Microsoft.Quantum.Canon.CControlledCA) |Given an operation op, returns a new operation which applies the op if a classical control bit is true. If `false`, nothing happens. The modifier `CA` indicates that the operation is controllable and adjointable. |
|[Compose](xref:Microsoft.Quantum.Canon.Compose) |Returns the composition of two functions. |
|[ConjugatedBy](xref:Microsoft.Quantum.Canon.ConjugatedBy) |Given outer and inner operations, returns a new operation that conjugates the inner operation by the outer operation. |
|[ConjugatedByA](xref:Microsoft.Quantum.Canon.ConjugatedByA) |Given outer and inner operations, returns a new operation that conjugates the inner operation by the outer operation. |
|[ConjugatedByC](xref:Microsoft.Quantum.Canon.ConjugatedByC) |Given outer and inner operations, returns a new operation that conjugates the inner operation by the outer operation. |
|[ConjugatedByCA](xref:Microsoft.Quantum.Canon.ConjugatedByCA) |Given outer and inner operations, returns a new operation that conjugates the inner operation by the outer operation. |
|[ControlledOnBitString](xref:Microsoft.Quantum.Canon.ControlledOnBitString) |Returns a unitary operation that applies an oracle on the target register if the control register state corresponds to a specified bit mask. |
|[ControlledOnInt](xref:Microsoft.Quantum.Canon.ControlledOnInt) |Returns a unitary operator that applies an oracle on the target register if the control register state corresponds to a specified positive integer. |
|[CurriedOp](xref:Microsoft.Quantum.Canon.CurriedOp) |Returns a curried version of an operation on two inputs. |
|[CurriedOpA](xref:Microsoft.Quantum.Canon.CurriedOpA) |Returns a curried version of an operation on two inputs. |
|[CurriedOpC](xref:Microsoft.Quantum.Canon.CurriedOpC) |Returns a curried version of an operation on two inputs. |
|[CurriedOpCA](xref:Microsoft.Quantum.Canon.CurriedOpCA) |Returns a curried version of an operation on two inputs. |
|[DecomposeIntoTimeStepsCA](xref:Microsoft.Quantum.Canon.DecomposeIntoTimeStepsCA) |> [!WARNING] |
|[DecomposedIntoTimeStepsCA](xref:Microsoft.Quantum.Canon.DecomposedIntoTimeStepsCA) |Returns an operation implementing the Trotter–Suzuki integrator for a given operation. |
|[Delayed](xref:Microsoft.Quantum.Canon.Delayed) |Returns an operation that applies given operation with given argument. |
|[DelayedA](xref:Microsoft.Quantum.Canon.DelayedA) |Returns an operation that applies given operation with given argument. |
|[DelayedC](xref:Microsoft.Quantum.Canon.DelayedC) |Returns an operation that applies given operation with given argument. |
|[DelayedCA](xref:Microsoft.Quantum.Canon.DelayedCA) |Returns an operation that applies given operation with given argument. |
|[EmbedPauli](xref:Microsoft.Quantum.Canon.EmbedPauli) |Given a single-qubit Pauli operator and the index of a qubit, returns a multi-qubit Pauli operator with the given single-qubit operator at that index and `PauliI` at every other index. |
|[Fst](xref:Microsoft.Quantum.Canon.Fst) |Given a pair, returns its first element. |
|[Ignore](xref:Microsoft.Quantum.Canon.Ignore) |Ignores the output of an operation or function. |
|[IsRangeEmpty](xref:Microsoft.Quantum.Canon.IsRangeEmpty) |Returns true if and only if input range is empty. |
|[IsResultOne](xref:Microsoft.Quantum.Canon.IsResultOne) |Tests if a given Result value is equal to `One`. |
|[IsResultZero](xref:Microsoft.Quantum.Canon.IsResultZero) |Tests if a given Result value is equal to `Zero`. |
|[LittleEndianToBigEndian](xref:Microsoft.Quantum.Canon.LittleEndianToBigEndian) |> [!WARNING] |
|[MultiplexerBruteForceFromGenerator](xref:Microsoft.Quantum.Canon.MultiplexerBruteForceFromGenerator) |Returns a multiply-controlled unitary operation $U$ that applies a unitary $V_j$ when controlled by n-qubit number state $\ket{j}$. |
|[MultiplexerFromGenerator](xref:Microsoft.Quantum.Canon.MultiplexerFromGenerator) |Returns a multiply-controlled unitary operation $U$ that applies a unitary $V_j$ when controlled by n-qubit number state $\ket{j}$. |
|[OperationPow](xref:Microsoft.Quantum.Canon.OperationPow) |Raises an operation to a power. |
|[OperationPowA](xref:Microsoft.Quantum.Canon.OperationPowA) |Raises an operation to a power. The modifier `A` indicates that the operation is adjointable. |
|[OperationPowC](xref:Microsoft.Quantum.Canon.OperationPowC) |Raises an operation to a power. The modifier `C` indicates that the operation is controllable. |
|[OperationPowCA](xref:Microsoft.Quantum.Canon.OperationPowCA) |Raises an operation to a power. The modifier `A` indicates that the operation is controllable and adjointable. |
|[RestrictedToSubregister](xref:Microsoft.Quantum.Canon.RestrictedToSubregister) |Restricts an operation to an array of indices of a register, i.e., a subregister. |
|[RestrictedToSubregisterA](xref:Microsoft.Quantum.Canon.RestrictedToSubregisterA) |Restricts an operation to an array of indices of a register, i.e., a subregister. The modifier `A` indicates that the operation is adjointable. |
|[RestrictedToSubregisterC](xref:Microsoft.Quantum.Canon.RestrictedToSubregisterC) |Restricts an operation to an array of indices of a register, i.e., a subregister. The modifier `C` indicates that the operation is controllable. |
|[RestrictedToSubregisterCA](xref:Microsoft.Quantum.Canon.RestrictedToSubregisterCA) |Restricts an operation to an array of indices of a register, i.e., a subregister. The modifier `CA` indicates that the operation is controllable and adjointable. |
|[SinglyControlled](xref:Microsoft.Quantum.Canon.SinglyControlled) |Given a controllable operation, returns a controlled version of that operation accepting exactly one control qubit. |
|[SinglyControlledA](xref:Microsoft.Quantum.Canon.SinglyControlledA) |Given a controllable operation, returns a controlled version of that operation accepting exactly one control qubit. |
|[Snd](xref:Microsoft.Quantum.Canon.Snd) |Given a pair, returns its second element. |
|[TransformedOperation](xref:Microsoft.Quantum.Canon.TransformedOperation) |Given a function and an operation, returns a new operation whose input is transformed by the given function. |
|[TransformedOperationA](xref:Microsoft.Quantum.Canon.TransformedOperationA) |Given a function and an operation, returns a new operation whose input is transformed by the given function. |
|[TransformedOperationC](xref:Microsoft.Quantum.Canon.TransformedOperationC) |Given a function and an operation, returns a new operation whose input is transformed by the given function. |
|[TransformedOperationCA](xref:Microsoft.Quantum.Canon.TransformedOperationCA) |Given a function and an operation, returns a new operation whose input is transformed by the given function. |
|[UncurriedOp](xref:Microsoft.Quantum.Canon.UncurriedOp) |Given a function which returns operations, returns a new operation which takes both inputs as a tuple. |
|[UncurriedOpA](xref:Microsoft.Quantum.Canon.UncurriedOpA) |Given a function which returns operations, returns a new operation which takes both inputs as a tuple. The modifier `A` indicates that the operations are adjointable. |
|[UncurriedOpC](xref:Microsoft.Quantum.Canon.UncurriedOpC) |Given a function which returns operations, returns a new operation which takes both inputs as a tuple. The modifier `C` indicates that the operations are controllable. |
|[UncurriedOpCA](xref:Microsoft.Quantum.Canon.UncurriedOpCA) |Given a function which returns operations, returns a new operation which takes both inputs as a tuple. The modifier `CA` indicates that the operations are controllable and adjointable. |
|[WeightOnePaulis](xref:Microsoft.Quantum.Canon.WeightOnePaulis) |Returns an array of all weight-1 Pauli operators on a given number of qubits. |
|[XOR](xref:Microsoft.Quantum.Canon.XOR) |> [!WARNING] |

## User-defined types

| Name | Summary |
|------|---------|
|[CCNOTop](xref:Microsoft.Quantum.Canon.CCNOTop) |The signature type of CCNOT gate. |
<!-- /summaries -->
