---
uid: Microsoft.Quantum.Arithmetic
title: Microsoft.Quantum.Arithmetic namespace
ms.date: 10/22/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Arithmetic
qsharp.summary: >-
  This namespace contains functions and operations used for coherently
  computing arithmetic.
---

# Microsoft.Quantum.Arithmetic namespace

This namespace contains functions and operations used for coherently
computing arithmetic.


<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[AddConstantFxP](xref:Microsoft.Quantum.Arithmetic.AddConstantFxP) |Adds a classical constant to a quantum fixed-point number. |
|[AddFxP](xref:Microsoft.Quantum.Arithmetic.AddFxP) |Adds two fixed-point numbers stored in quantum registers. |
|[AddI](xref:Microsoft.Quantum.Arithmetic.AddI) |Automatically chooses between addition with carry and without, depending on the register size of `ys`. |
|[ApplyLEOperationOnPhaseLE](xref:Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLE) |Applies an operation that takes a <xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian> register as input on a target register of type <xref:Microsoft.Quantum.Arithmetic.LittleEndian>. |
|[ApplyLEOperationOnPhaseLEA](xref:Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLEA) |Applies an operation that takes a <xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian> register as input on a target register of type <xref:Microsoft.Quantum.Arithmetic.LittleEndian>. |
|[ApplyLEOperationOnPhaseLEC](xref:Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLEC) |Applies an operation that takes a <xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian> register as input on a target register of type <xref:Microsoft.Quantum.Arithmetic.LittleEndian>. |
|[ApplyLEOperationOnPhaseLECA](xref:Microsoft.Quantum.Arithmetic.ApplyLEOperationOnPhaseLECA) |Applies an operation that takes a <xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian> register as input on a target register of type <xref:Microsoft.Quantum.Arithmetic.LittleEndian>. |
|[ApplyMajorityInPlace](xref:Microsoft.Quantum.Arithmetic.ApplyMajorityInPlace) |Applies the three-qubit majority operation in-place on a register of qubits. |
|[ApplyPhaseLEOperationOnLE](xref:Microsoft.Quantum.Arithmetic.ApplyPhaseLEOperationOnLE) |Applies an operation that takes a <xref:Microsoft.Quantum.Arithmetic.LittleEndian> register as input on a target register of type <xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian>. |
|[ApplyPhaseLEOperationOnLEA](xref:Microsoft.Quantum.Arithmetic.ApplyPhaseLEOperationOnLEA) | |
|[ApplyPhaseLEOperationOnLEC](xref:Microsoft.Quantum.Arithmetic.ApplyPhaseLEOperationOnLEC) | |
|[ApplyPhaseLEOperationOnLECA](xref:Microsoft.Quantum.Arithmetic.ApplyPhaseLEOperationOnLECA) | |
|[ApplyReversedOpBE](xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpBE) |Applies an operation that takes big-endian input to a register encoding an unsigned integer using little-endian format. |
|[ApplyReversedOpBEA](xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpBEA) |Applies an operation that takes big-endian input to a register encoding an unsigned integer using little-endian format. |
|[ApplyReversedOpBEC](xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpBEC) |Applies an operation that takes big-endian input to a register encoding an unsigned integer using little-endian format. |
|[ApplyReversedOpBECA](xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpBECA) |Applies an operation that takes big-endian input to a register encoding an unsigned integer using little-endian format. |
|[ApplyReversedOpLE](xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpLE) |Applies an operation that takes little-endian input to a register encoding an unsigned integer using big-endian format. |
|[ApplyReversedOpLEA](xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpLEA) |Applies an operation that takes little-endian input to a register encoding an unsigned integer using big-endian format. |
|[ApplyReversedOpLEC](xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpLEC) |Applies an operation that takes little-endian input to a register encoding an unsigned integer using big-endian format. |
|[ApplyReversedOpLECA](xref:Microsoft.Quantum.Arithmetic.ApplyReversedOpLECA) |Applies an operation that takes little-endian input to a register encoding an unsigned integer using big-endian format. |
|[ApplyXorInPlace](xref:Microsoft.Quantum.Arithmetic.ApplyXorInPlace) |Applies a bitwise-XOR operation between a classical integer and an integer represented by a register of qubits. |
|[AssertAllZeroFxP](xref:Microsoft.Quantum.Arithmetic.AssertAllZeroFxP) |Asserts that a quantum fixed-point number is initialized to zero. |
|[AssertMostSignificantBit](xref:Microsoft.Quantum.Arithmetic.AssertMostSignificantBit) |Asserts that the most significant qubit of a qubit register representing an unsigned integer is in a particular state. |
|[AssertPhaseLessThan](xref:Microsoft.Quantum.Arithmetic.AssertPhaseLessThan) |Asserts that the `number` encoded in PhaseLittleEndian is less than `value`. |
|[AssertProbInt](xref:Microsoft.Quantum.Arithmetic.AssertProbInt) |Asserts that the probability of a specific state of a quantum register has the expected value. |
|[Carry](xref:Microsoft.Quantum.Arithmetic.Carry) |Implements a reversible carry gate. Given a carry-in bit encoded in qubit `carryIn` and two summand bits encoded in `summand1` and `summand2`, computes the bitwise xor of `carryIn`, `summand1` and `summand2` in the qubit `summand2` and the carry-out is xored to the qubit `carryOut`. |
|[CompareGTI](xref:Microsoft.Quantum.Arithmetic.CompareGTI) |Wrapper for integer comparison: `result = x > y`. |
|[CompareGTSI](xref:Microsoft.Quantum.Arithmetic.CompareGTSI) |Wrapper for signed integer comparison: `result = xs > ys`. |
|[CompareGreaterThanFxP](xref:Microsoft.Quantum.Arithmetic.CompareGreaterThanFxP) |Compares two fixed-point numbers stored in quantum registers, and controls a flip on the result. |
|[CompareUsingRippleCarry](xref:Microsoft.Quantum.Arithmetic.CompareUsingRippleCarry) |This operation tests if an integer represented by a register of qubits is greater than another integer, applying an XOR of the result onto an output qubit. |
|[ComputeReciprocalFxP](xref:Microsoft.Quantum.Arithmetic.ComputeReciprocalFxP) |Computes the reciprocal of a number stored in a quantum register with the fixed-point representation. |
|[ComputeReciprocalI](xref:Microsoft.Quantum.Arithmetic.ComputeReciprocalI) |Computes the reciprocal 1/x for an unsigned integer x using integer division. The result, interpreted as an integer, will be `floor(2^(2*n-1) / x)`. |
|[CopyMostSignificantBit](xref:Microsoft.Quantum.Arithmetic.CopyMostSignificantBit) |Copies the most significant bit of a qubit register `from` representing an unsigned integer into the qubit `target`. |
|[DivideI](xref:Microsoft.Quantum.Arithmetic.DivideI) |Divides two quantum integers. |
|[EvaluateEvenPolynomialFxP](xref:Microsoft.Quantum.Arithmetic.EvaluateEvenPolynomialFxP) |Evaluates an even polynomial in a fixed-point representation. |
|[EvaluateOddPolynomialFxP](xref:Microsoft.Quantum.Arithmetic.EvaluateOddPolynomialFxP) |Evaluates an odd polynomial in a fixed-point representation. |
|[EvaluatePolynomialFxP](xref:Microsoft.Quantum.Arithmetic.EvaluatePolynomialFxP) |Evaluates a polynomial in a fixed-point representation. |
|[GreaterThan](xref:Microsoft.Quantum.Arithmetic.GreaterThan) |Applies a greater-than comparison between two integers encoded into qubit registers, flipping a target qubit based on the result of the comparison. |
|[IncrementByInteger](xref:Microsoft.Quantum.Arithmetic.IncrementByInteger) |Increments an unsigned quantum register by a classical integer, using phase rotations. |
|[IncrementByModularInteger](xref:Microsoft.Quantum.Arithmetic.IncrementByModularInteger) |Performs a modular increment of a qubit register by an integer constant. |
|[IncrementPhaseByInteger](xref:Microsoft.Quantum.Arithmetic.IncrementPhaseByInteger) |Increments an unsigned quantum register by a classical integer, using phase rotations. |
|[IncrementPhaseByModularInteger](xref:Microsoft.Quantum.Arithmetic.IncrementPhaseByModularInteger) |Performs a modular increment of a qubit register by an integer constant. |
|[Invert2sSI](xref:Microsoft.Quantum.Arithmetic.Invert2sSI) |Inverts a given integer modulo 2's complement. |
|[MAJ](xref:Microsoft.Quantum.Arithmetic.MAJ) |This applies the in-place majority operation to 3 qubits. |
|[MeasureFxP](xref:Microsoft.Quantum.Arithmetic.MeasureFxP) |Measure a fixed-point number, returns its value as Double, and resets all the register to zero. |
|[MeasureInteger](xref:Microsoft.Quantum.Arithmetic.MeasureInteger) |Measures the content of a quantum register and converts it to an integer. The measurement is performed with respect to the standard computational basis, i.e., the eigenbasis of `PauliZ`. |
|[MultiplyAndAddByModularInteger](xref:Microsoft.Quantum.Arithmetic.MultiplyAndAddByModularInteger) |Performs a modular multiply-and-add by integer constants on a qubit register. |
|[MultiplyAndAddPhaseByModularInteger](xref:Microsoft.Quantum.Arithmetic.MultiplyAndAddPhaseByModularInteger) |The same as MultiplyAndAddByModularInteger, but assumes that the summand encodes integers in QFT basis. |
|[MultiplyByModularInteger](xref:Microsoft.Quantum.Arithmetic.MultiplyByModularInteger) |Performs modular multiplication by an integer constant on a qubit register. |
|[MultiplyFxP](xref:Microsoft.Quantum.Arithmetic.MultiplyFxP) |Multiplies two fixed-point numbers in quantum registers. |
|[MultiplyI](xref:Microsoft.Quantum.Arithmetic.MultiplyI) |Multiply integer `xs` by integer `ys` and store the result in `result`, which must be zero initially. |
|[MultiplySI](xref:Microsoft.Quantum.Arithmetic.MultiplySI) |Multiply signed integer `xs` by signed integer `ys` and store the result in `result`, which must be zero initially. |
|[PrepareFxP](xref:Microsoft.Quantum.Arithmetic.PrepareFxP) |Initialize a quantum fixed-point number to a classical constant. |
|[ReflectAboutInteger](xref:Microsoft.Quantum.Arithmetic.ReflectAboutInteger) |Reflects a quantum register about a given classical integer. |
|[RippleCarryAdderCDKM](xref:Microsoft.Quantum.Arithmetic.RippleCarryAdderCDKM) |Reversible, in-place ripple-carry addition of two integers. |
|[RippleCarryAdderD](xref:Microsoft.Quantum.Arithmetic.RippleCarryAdderD) |Reversible, in-place ripple-carry addition of two integers. |
|[RippleCarryAdderNoCarryTTK](xref:Microsoft.Quantum.Arithmetic.RippleCarryAdderNoCarryTTK) |Reversible, in-place ripple-carry addition of two integers without carry out. |
|[RippleCarryAdderTTK](xref:Microsoft.Quantum.Arithmetic.RippleCarryAdderTTK) |Reversible, in-place ripple-carry addition of two integers. Given two $n$-bit integers encoded in LittleEndian registers `xs` and `ys`, and a qubit carry, the operation computes the sum of the two integers where the $n$ least significant bits of the result are held in `ys` and the carry out bit is xored to the qubit `carry`. |
|[SquareFxP](xref:Microsoft.Quantum.Arithmetic.SquareFxP) |Squares a fixed-point number. |
|[SquareI](xref:Microsoft.Quantum.Arithmetic.SquareI) |Computes the square of the integer `xs` into `result`, which must be zero initially. |
|[SquareSI](xref:Microsoft.Quantum.Arithmetic.SquareSI) |Square signed integer `xs` and store the result in `result`, which must be zero initially. |
|[Sum](xref:Microsoft.Quantum.Arithmetic.Sum) |Implements a reversible sum gate. Given a carry-in bit encoded in qubit `carryIn` and two summand bits encoded in `summand1` and `summand2`, computes the bitwise xor of `carryIn`, `summand1` and `summand2` in the qubit `summand2`. |

## Functions

| Name | Summary |
|------|---------|
|[BigEndianAsLittleEndian](xref:Microsoft.Quantum.Arithmetic.BigEndianAsLittleEndian) |Converts a `BigEndian` qubit register to a `LittleEndian` qubit register by reversing the qubit ordering. |
|[IdenticalFormatFactFxP](xref:Microsoft.Quantum.Arithmetic.IdenticalFormatFactFxP) |Assert that all fixed-point numbers in the provided array have identical point positions and qubit numbers. |
|[IdenticalPointPosFactFxP](xref:Microsoft.Quantum.Arithmetic.IdenticalPointPosFactFxP) |Assert that all fixed-point numbers in the provided array have identical point positions when counting from the least- significant bit. I.e., number of bits minus point position must be constant for all fixed-point numbers in the array. |
|[LittleEndianAsBigEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndianAsBigEndian) |Converts a `LittleEndian` qubit register to a `BigEndian` qubit register by reversing the qubit ordering. |
|[ReversedOpBE](xref:Microsoft.Quantum.Arithmetic.ReversedOpBE) |Given an operation that takes a big-endian input, returns a new operation that takes a little-endian input. |
|[ReversedOpBEA](xref:Microsoft.Quantum.Arithmetic.ReversedOpBEA) |Given an operation that takes a big-endian input, returns a new operation that takes a little-endian input. |
|[ReversedOpBEC](xref:Microsoft.Quantum.Arithmetic.ReversedOpBEC) |Given an operation that takes a big-endian input, returns a new operation that takes a little-endian input. |
|[ReversedOpBECA](xref:Microsoft.Quantum.Arithmetic.ReversedOpBECA) |Given an operation that takes a big-endian input, returns a new operation that takes a little-endian input. |
|[ReversedOpLE](xref:Microsoft.Quantum.Arithmetic.ReversedOpLE) |Given an operation that takes a little-endian input, returns a new operation that takes a big-endian input. |
|[ReversedOpLEA](xref:Microsoft.Quantum.Arithmetic.ReversedOpLEA) |Given an operation that takes a little-endian input, returns a new operation that takes a big-endian input. |
|[ReversedOpLEC](xref:Microsoft.Quantum.Arithmetic.ReversedOpLEC) |Given an operation that takes a little-endian input, returns a new operation that takes a big-endian input. |
|[ReversedOpLECA](xref:Microsoft.Quantum.Arithmetic.ReversedOpLECA) |Given an operation that takes a little-endian input, returns a new operation that takes a big-endian input. |

## User-defined types

| Name | Summary |
|------|---------|
|[BigEndian](xref:Microsoft.Quantum.Arithmetic.BigEndian) |Register that encodes an unsigned integer in big-endian order. The qubit with index `0` encodes the highest bit of an unsigned integer. |
|[FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint) |Represents a register of qubits encoding a fixed-point number. Consists of an integer that is equal to the number of qubits to the left of the binary point, i.e., qubits of weight greater than or equal to 1, and a quantum register. |
|[LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian) |Register that encodes an unsigned integer in little-endian order. The qubit with index `0` encodes the lowest bit of an unsigned integer. |
|[PhaseLittleEndian](xref:Microsoft.Quantum.Arithmetic.PhaseLittleEndian) |Little-endian unsigned integers in QFT basis. |
|[SignedLittleEndian](xref:Microsoft.Quantum.Arithmetic.SignedLittleEndian) |Type of a signed integer stored in little endian (see LittleEndian). |
<!-- /summaries -->
