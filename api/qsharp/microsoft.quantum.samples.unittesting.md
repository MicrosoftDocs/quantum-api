---
uid: Microsoft.Quantum.Samples.UnitTesting
title: Microsoft.Quantum.Samples.UnitTesting namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Samples.UnitTesting
qsharp.summary: ''
---

# Microsoft.Quantum.Samples.UnitTesting namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApplyBuiltInControlledSWAP](xref:Microsoft.Quantum.Samples.UnitTesting.ApplyBuiltInControlledSWAP) |Implementation of ControlledSWAP using standard Microsoft.Quantum.Intrinsic.SWAP
|[ApplyControlledSWAPUsingCCNOT](xref:Microsoft.Quantum.Samples.UnitTesting.ApplyControlledSWAPUsingCCNOT) |Applies the Controlled SWAP operation (aka Fredkin), using a given CCNOT implementation.
|[ApplyControlledSWAPUsingExplicitDecomposition](xref:Microsoft.Quantum.Samples.UnitTesting.ApplyControlledSWAPUsingExplicitDecomposition) |Implementation of the 3 qubit Fredkin gate over the Clifford+T gate set, according to Amy et al
|[ApplyIdentityWithTeleport](xref:Microsoft.Quantum.Samples.UnitTesting.ApplyIdentityWithTeleport) |If the Teleportation circuit is correct this operation must be an identity
|[ApplyMultiControlledXByBorrowing](xref:Microsoft.Quantum.Samples.UnitTesting.ApplyMultiControlledXByBorrowing) |Multiply controlled NOT gate using dirty qubits, according to Barenco et al
|[ApplyMultiControlledXByUsing](xref:Microsoft.Quantum.Samples.UnitTesting.ApplyMultiControlledXByUsing) |Implements Multiply Controlled Not gate using Microsoft.Quantum.Canon library combinator
|[ApplyMultiTargetMultiNot](xref:Microsoft.Quantum.Samples.UnitTesting.ApplyMultiTargetMultiNot) |Multi target multi controlled Not implementation using ApplyMultiControlledCA
|[ApplyMultiTargetNot](xref:Microsoft.Quantum.Samples.UnitTesting.ApplyMultiTargetNot) |A simple implementation of target Controlled Not gate using CNOT gates
|[CCNOT1](xref:Microsoft.Quantum.Samples.UnitTesting.CCNOT1) |Implementation of CCNOT gate over the Clifford+T gate set, according to Nielsen and Chuang Fig. 4.9
|[CCNOT2](xref:Microsoft.Quantum.Samples.UnitTesting.CCNOT2) |
|[CCNOT3](xref:Microsoft.Quantum.Samples.UnitTesting.CCNOT3) |Implementation of the CCNOT gate over the Clifford+T gate set, with 4 T-gates, according to Jones
|[CCNOT4](xref:Microsoft.Quantum.Samples.UnitTesting.CCNOT4) |Implementation of the CCNOT gate using the decomposition of CCZ into the exponents of tensor products of Z operators
|[CCNOTCircuitsTest](xref:Microsoft.Quantum.Samples.UnitTesting.CCNOTCircuitsTest) |This operation tests correctness of the implementation of Doubly Controlled X gates also known as Toffoli gates.
|[CCZ1](xref:Microsoft.Quantum.Samples.UnitTesting.CCZ1) |Implementation of Double Controlled Z gate in terms of exponents of Pauli operators
|[CheckMultiTargetMultiControlledNotIsCorrect](xref:Microsoft.Quantum.Samples.UnitTesting.CheckMultiTargetMultiControlledNotIsCorrect) |Tests correctness of MultiTargetMultiNot implementations
|[CheckRepeatUntilSuccessPreparesCorrectState](xref:Microsoft.Quantum.Samples.UnitTesting.CheckRepeatUntilSuccessPreparesCorrectState) |Here we check the correctness of Repeat Until Success state preparation circuit defined in RepeatUntilSuccessCircuits.qs.
|[CheckRepeatUntilSuccessRotatesByCorrectAngle](xref:Microsoft.Quantum.Samples.UnitTesting.CheckRepeatUntilSuccessRotatesByCorrectAngle) |Here we check the correctness of Repeat Until Success unitary circuits defined in RepeatUntilSuccessCircuits.qs.
|[CheckSuperdenseCodingWorks](xref:Microsoft.Quantum.Samples.UnitTesting.CheckSuperdenseCodingWorks) |Tests SuperdenseCodingProtocolRun on all possible inputs.
|[CheckTeleportIdentityIsNoOp](xref:Microsoft.Quantum.Samples.UnitTesting.CheckTeleportIdentityIsNoOp) |Tests the correctness of the teleportation circuit from Teleportation.qs
|[CollectMetrics](xref:Microsoft.Quantum.Samples.UnitTesting.CollectMetrics) |This is an utility operation used to collect gate counts, depth etc of the circuit
|[ControlledSWAPTest](xref:Microsoft.Quantum.Samples.UnitTesting.ControlledSWAPTest) |This operation tests correctness of the implementations of ControlledSWAP also known as Fredkin gate.
|[ControlledTestHelper](xref:Microsoft.Quantum.Samples.UnitTesting.ControlledTestHelper) |
|[CreateEPRPair](xref:Microsoft.Quantum.Samples.UnitTesting.CreateEPRPair) |Creates an EPR ( also known as Bell ) pair from 2 qubits initialized into zero state. In Dirac notation EPR state is (|00⟩+|11⟩)/√2.
|[ExpIZArcTan2NC](xref:Microsoft.Quantum.Samples.UnitTesting.ExpIZArcTan2NC) |Example of a Repeat-Until-Success circuit implementing exp(i⋅ArcTan(2)⋅Z) by Nielsen & Chuang. Gate exp(i⋅ArcTan(2)⋅Z) is also know as V gate.
|[ExpIZArcTan2PS](xref:Microsoft.Quantum.Samples.UnitTesting.ExpIZArcTan2PS) |Example of a Repeat-Until-Success circuit implementing exp(i⋅ArcTan(2)⋅Z) by Paetznick & Svore. Gate exp(i⋅ArcTan(2)⋅Z) is also know as V gate.
|[MultiControlledNotTest](xref:Microsoft.Quantum.Samples.UnitTesting.MultiControlledNotTest) |Tests correctness of MultiControlledNot implementations
|[MultiControlledNotWithDirtyQubitsMetrics](xref:Microsoft.Quantum.Samples.UnitTesting.MultiControlledNotWithDirtyQubitsMetrics) |Lets us collect metrics related to borrowing
|[MultiControlledNotWithDirtyQubitsTest](xref:Microsoft.Quantum.Samples.UnitTesting.MultiControlledNotWithDirtyQubitsTest) |Tests correctness of MultiControlledNot implementations in the presence of dirty qubits.
|[RepeatUntilSuccessStatePreparation](xref:Microsoft.Quantum.Samples.UnitTesting.RepeatUntilSuccessStatePreparation) |Prepares state (√2/√3,1/√3) starting from a |+⟩ state using Repeat-Until-Success protocol.
|[RunSuperdenseCoding](xref:Microsoft.Quantum.Samples.UnitTesting.RunSuperdenseCoding) |Test run of the protocol. We first create an EPR pair between two ancilla qubits. Depending on the value of two classical bits then one out of 4 possible Bell states is created by applying a local transformation to just one half of the EPR pair. Finally, a Bell measurement is applied to decode the two bits of classical information from the state.
|[RunTeleportation](xref:Microsoft.Quantum.Samples.UnitTesting.RunTeleportation) |Teleportation transfers 1 qubit by encoding it into a 2-bit message, using an entangled pair of qubits.
|[SuperdenseDecode](xref:Microsoft.Quantum.Samples.UnitTesting.SuperdenseDecode) |Decodes two bits of information from a joint state of two qubits.
|[SuperdenseEncode](xref:Microsoft.Quantum.Samples.UnitTesting.SuperdenseEncode) |Encodes two bits of information in one qubit. The qubit is expected to be a half of an EPR pair.
|[TDepthOneCCNOT](xref:Microsoft.Quantum.Samples.UnitTesting.TDepthOneCCNOT) |CCNOT gate over the Clifford+T gate set, in T-depth 1, according to Selinger
|[TDepthOneCCNOTInnerCircuit](xref:Microsoft.Quantum.Samples.UnitTesting.TDepthOneCCNOTInnerCircuit) |
|[TDepthOneCCNOTOuterCircuit](xref:Microsoft.Quantum.Samples.UnitTesting.TDepthOneCCNOTOuterCircuit) |
|[UpToPhaseCCNOT1](xref:Microsoft.Quantum.Samples.UnitTesting.UpToPhaseCCNOT1) |Implementation of the CCNOT gate up to phases over the Clifford+T gate set, according to Nielsen and Chuang, Exercise 4.26.
|[UpToPhaseCCNOT2](xref:Microsoft.Quantum.Samples.UnitTesting.UpToPhaseCCNOT2) |Implementation of the CCNOT gate up to phases over the Clifford+T gate set, according to Selinger. On computational basis states this gate acts as |c₁⟩⊗|c₂⟩⊗|t⟩ ↦ (-i)^(c₁∧c₂) |c₁⟩⊗|c₂⟩⊗|t⊕(c₁∧c₂)⟩. This circuit uses 4 T gates and has T depth 1 and uses one ancillary qubit
|[UpToPhaseCCNOT2InnerCircuit](xref:Microsoft.Quantum.Samples.UnitTesting.UpToPhaseCCNOT2InnerCircuit) |
|[UpToPhaseCCNOT2OuterCircuit](xref:Microsoft.Quantum.Samples.UnitTesting.UpToPhaseCCNOT2OuterCircuit) |
|[UpToPhaseCCNOT3](xref:Microsoft.Quantum.Samples.UnitTesting.UpToPhaseCCNOT3) |Simple implementation of the CCNOT gate up to phases over defined as |c₁⟩⊗|c₂⟩⊗|t⟩ ↦ (-i)^(c₁∧c₂) |c₁⟩⊗|c₂⟩⊗|t⊕(c₁∧c₂)⟩.


<!-- /summaries -->
